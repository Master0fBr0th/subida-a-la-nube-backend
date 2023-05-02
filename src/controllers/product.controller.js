import {ProductoService} from "../services/producto.service.js";

const productoService = ProductoService.getInstance();

export async function getAll(req, res) {
    const products = await productoService.getAll();
    products
        ? res.status(200).json(products)
        : res.status(400).json({"error": "hubo un problema al tratar de obtener los productos"})
}

export async function getById(req, res) {
    const {id} = req.params;
    const product = await productoService.getProductById(id);

    product
        ? res.status(200).json(product)
        : res.status(400).json({"error": "Producto no encontrado"})
}

export async function create(req, res) {
    const {body} = req;
    const newProduct = await productoService.create(body);

    newProduct
        ? res.status(200).json({"success": "Productp agregado con ID " + newProduct._id})
        : res.status(400).json({"error": "hubo un error, verifique que el contenido del cuerpo coincida con el esquema"})
}

export async function update(req, res) {
    const {id} = req.params;
    const {body} = req;
    const wasUpdated = await productoService.updateProductById(id, body);

    wasUpdated
        ? res.status(200).json({"success": "producto Actualizado"})
        : res.status(404).json({"error": "producto no encontrado o contenido del cuerpo no válido."})
}

export async function remove(req, res) {
    const {id} = req.params;
    const wasDeleted = await productoService.deleteById(id)

    wasDeleted
        ? res.status(200).json({"success": "producto eliminado con éxito"})
        : res.status(404).json({"error": "Producto no encontrado"})
}

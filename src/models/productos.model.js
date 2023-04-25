import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 120
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        max: 1500
    },
    code: {
        type: String,
        required: true,
        max: 8,
        unique: true
    },
    image: {
        type: String,
        max: 100
    },
    stock: {
        type: Number,
        required: true,
        max: 8000
    }
})

export const ProductosModel = mongoose.model("productos", Schema);
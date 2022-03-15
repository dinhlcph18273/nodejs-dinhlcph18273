import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type : String,
        minlength: 5,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }

}, {timestamps: true})

export default mongoose.model("Product", productSchema)
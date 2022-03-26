import mongoose from "mongoose";
import  {ObjectId, Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type : String,
        minlength: 5,
        required: true,
        unique:true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }

}, {timestamps: true})

export default mongoose.model("Product", productSchema)
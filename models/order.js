import mongoose,{Schema} from "mongoose"

const orderSchema = new Schema({
    products: [],
    information: {
        name: String,
        address: String,
        phone: Number,
        email: String,
        note: String
    },
    status: {
        type: Number,
        default:0
    },
    total: Number,
})

export default mongoose.model("Order",orderSchema)
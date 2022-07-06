import Order from "../models/order"

export const createOrder = async (req, res) => {
    try {
        const order = await new Order(req.body).save();
        return res.json(order)
    } catch (error) {
        return res.status(400).json({
            message:"khong them duoc"
        })
    }
}

export const listOrder = async (req, res) => {
    try {
        const order = await Order.find();
        return res.json(order)
    } catch (error) {
        return res.status(400).json({
            message:"khong them duoc"
        })
    }
}

export const readOrder = async (req, res) => {
    const filter = {_id: req.params.id}
    try {
        const order = await Order.findOne(filter);
        return res.json(order)
    } catch (error) {
        return res.status(400).json({
            message:"khong them duoc"
        })
    }
}

export const removeOrder = async (req, res) => {
    const filter = {_id: req.params.id}
    try {
        const order = await Order.findOneAndDelete(filter);
        return res.json(order)
    } catch (error) {
        return res.status(400).json({
            message:"khong them duoc"
        })
    }
}

export const updateOrder = async (req, res) => {
    const filter = {_id: req.params.id}
    const document = req.body
    const option = {new : true}
    try {
        const order = await Order.findOneAndUpdate(filter,document,option);
        return res.json(order)
    } catch (error) {
        return res.status(400).json({
            message:"khong them duoc"
        })
    }
}
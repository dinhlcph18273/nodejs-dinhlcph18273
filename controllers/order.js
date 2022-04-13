import Order from "../models/order"

export const createOrder = async (req, res) => {
    try {
        const order = await new Order(req.body).save();
        res.json(order)
    } catch (error) {
        res.status(400).json({
            message:"khong them duoc"
        })
    }
}

export const listOrder = async (req, res) => {
    try {
        const order = await Order.find();
        res.json(order)
    } catch (error) {
        res.status(400).json({
            message:"khong them duoc"
        })
    }
}

export const readOrder = async (req, res) => {
    const filter = {_id: req.params.id}
    try {
        const order = await Order.findOne(filter);
        res.json(order)
    } catch (error) {
        res.status(400).json({
            message:"khong them duoc"
        })
    }
}

export const removeOrder = async (req, res) => {
    const filter = {_id: req.params.id}
    try {
        const order = await Order.findOneAndDelete(filter);
        res.json(order)
    } catch (error) {
        res.status(400).json({
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
        res.json(order)
    } catch (error) {
        res.status(400).json({
            message:"khong them duoc"
        })
    }
}
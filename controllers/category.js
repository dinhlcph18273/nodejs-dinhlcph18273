import Category from "../models/category";
import Product from "../models/product";

export const createCate = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category)
    } catch (error) {
        res.status(400).json({
            message:"khong them duoc"
        })
    }
}

export const listCate = async (req, res) =>{
    try {
        const category = await Category.find();
        res.json(category)
    } catch (error) {
        res.status(400).json({
             message: "khong thuc hien duoc"
        })
    }
}


export const read = async (req, res) =>{
    try {
        const category = await Category.findOne({_id:req.params.id}).exec();
        const products = await Product.find({category}).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {
        res.status(400).json({
             message: "khong thuc hien duoc"
        })
    }
}

export const removeCate = async (req, res) =>{
    const condition = {_id: req.params.id}
    try {
        const category = await Category.findOneAndDelete(condition);
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "khong thuc hien duoc"
        })
    }
}

export const updateCate = async (req, res) =>{
    const condition = {_id: req.params.id}
    const document = req.body
    const option = {new: true}
    try {
        const category = await Category.findOneAndUpdate(condition,document,option);
        res.json(category);
    } catch (error) {
        res.status(400).json({
             message: "khong thuc hien duoc"
        })
    }
}

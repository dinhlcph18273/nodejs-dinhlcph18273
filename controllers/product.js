import Product from "../models/product"
import slugify from "slugify";
import { json } from "express/lib/response";

export const list = async (req,res) => {
  try {
        const products = await Product.find();
        res.json(products)
  } catch (error) {
      res.status(400).json({
          message:"khong tim duoc"
      })
  }
}

export const get = async (req,res) =>{
    const filter = {_id: req.params.id}
    try {
         const products = await Product.findOne(filter);
        res.json(products)
    } catch (error) {
         res.status(400).json({
          message:"khong tim duoc"
      })
    }
}

export const remove = async (req,res) =>{
    const condition = {_id: req.params.id}
   try {
       const products = await Product.findOneAndDelete(condition);
       res.json(products);
   } catch (error) {
        res.status(400).json({
          message:"khong xóa duoc"
      })
   }
}

export const create = async (req,res) =>{
    req.body.slug = slugify(req.body.name)
  try {
      const product = await new Product(req.body).save();
      res.json(product)
  } catch (error) {
      res.status(400).json({
          message:"khong them duoc"
      })
  }
}

export const update = async (req, res) =>{
    req.body.slug = slugify(req.body.name)
    const condition = {_id: req.params.id}
    const doc = req.body
    const option = {new: true}
    try {
        const products = await Product.findOneAndUpdate(condition,doc,option);
        res.json(products)
    } catch (error) {
          res.status(400).json({
          message:"khong update duoc"
      })
    }
}

export const search = async(req,res) => {
    const q = req.query.q
    const result = {$text: {$search: q}}
    const search = await Product.find(result)
    res.json(search)
}
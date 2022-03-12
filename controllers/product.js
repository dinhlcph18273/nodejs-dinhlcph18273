import mongoose from "mongoose";

const Product = mongoose.model("Product", { name: String ,img: String, price: Number, quantity: Number, desc: String, status: Boolean});

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
    try {
         const products = await Product.findById(req.params.id);
        res.json(products)
    } catch (error) {
         res.status(400).json({
          message:"khong tim duoc"
      })
    }
}

export const remove = async (req,res) =>{
   try {
       const products = await Product.findByIdAndRemove(req.params.id);
       res.json(products);
   } catch (error) {
        res.status(400).json({
          message:"khong xóa duoc"
      })
   }
}

export const create = async (req,res) =>{
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
    try {
        const products = await Product.findByIdAndUpdate(req.params.id,(req.body));
        res.json(products)
    } catch (error) {
          res.status(400).json({
          message:"khong update duoc"
      })
    }
}
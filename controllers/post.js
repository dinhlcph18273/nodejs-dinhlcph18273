import mongoose from "mongoose";

const Post = mongoose.model("Post", {title: String,img: String, desc: String});


export const listPost = async (req,res) => {
  try {
      const posts = await Post.find();
      res.json(posts)
  } catch (error) {
      res.status(400).json({
          message:"khong tim duoc"
      })
  }
}

export const getPost = async (req,res) =>{
    try {
         const posts = await Post.findById(req.params.id);
        res.json(posts)
    } catch (error) {
         res.status(400).json({
          message:"khong tim duoc"
      })
    }
}

export const removePost = async (req,res) =>{
   try {
       const posts = await Post.findByIdAndRemove(req.params.id);
       res.json(posts);
   } catch (error) {
        res.status(400).json({
          message:"khong xóa duoc"
      })
   }
}

export const createPost = async (req,res) =>{
  try {
      const post = await new Post(req.body).save();
      res.json(post)
  } catch (error) {
      res.status(400).json({
          message:"khong them duoc"
      })
  }
}

export const updatePost = async (req, res) =>{
    try {
        const posts = await Post.findByIdAndUpdate(req.params.id,(req.body));
        res.json(posts)
    } catch (error) {
          res.status(400).json({
          message:"khong update duoc"
      })
    }
}
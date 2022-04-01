import User from "../models/user"
import jwt from "jsonwebtoken"

export const signup = async(req,res) =>{
    const {email, name, password } = req.body
    try {
        const exitsUser = await User.findOne({email}).exec()
        if(exitsUser){
            res.status(400).json({
                message:"Email đã tồn tại"
            })
        }
        const user = await new User({email, name, password}).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
            }
        })
    } catch (error) {
         res.status(400).json({
                message:"Đăng ký thất bại"
            })
    }
}

export const signin = async(req,res) => {
    const {email, password} = req.body

    try {
        const user = await User.findOne({email}).exec();
        if(!user){
             res.status(400).json({
                message:"Tk k ton tai"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message:"sai pass bé ưi"
            })
        }
        
        const token = jwt.sign({_id:user._id}, "123456",{expiresIn: "1h"})

        res.json({
            token,
              user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (error) {
          res.status(400).json({
                message:"không đăng nhập được"
            })
    }
    
}
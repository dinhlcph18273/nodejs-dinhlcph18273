import User from "../models/user"

export const userById = async(req,res,next,id) =>{
    const user = await User.findById(id).exec();
    try {
        if(!user){
            res.status(400).json({
                message:"Khong tim thay user"
            })
        }

        req.profile = user;
        next();
    } catch (error) {
        
    }
}
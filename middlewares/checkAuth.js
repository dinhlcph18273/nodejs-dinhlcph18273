import expressJWT from "express-jwt"

export const checkAuth = (req , res, next) => {
    const status = true;
    if(status){
        console.log("chào xếp!");
        next();
    }else{
        console.log("đi đâu đấy?");
    }
}


export const requireSignin = expressJWT({
    algorithms: ["HS256"],
    secret:"123456",
    requestProperty:"auth"
});

export const isAuth = (req,res,next) =>{
    const status = req.profile._id == req.auth._id;
    if(!status){
        res.status(400).json({
            message:"ban khong co quen truy cap"
        })
    }
    next();
}
export const isAdmin = (req,res,next) => {
    if(req.profile.role == 0){
        res.status(401).json({
            message:"khong phải admin ai cho m them"
        })
    }
    next()
}
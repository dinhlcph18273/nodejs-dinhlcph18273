export const checkAuth = (req , res, next) => {
    const status = true;
    if(status){
        console.log("chào xếp!");
        next();
    }else{
        console.log("đi đâu đấy?");
    }
}

import User from "../models/user"

export const listUser = async(req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.status(400).json({
             message: "Khong tim duoc"
        })
    }
}

export const postUser = async (req,res) =>{
    try {
        const user = await new User(req.body).save();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message:"khong them dc user"
        })
    }
}

export const deleteUser = async(req,res) =>{
    const condtition = {_id: req.params.id}
    try {
        const user = await findOneAndDelete(condtition);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message:"khong xoa dc user"
        })
    }
}
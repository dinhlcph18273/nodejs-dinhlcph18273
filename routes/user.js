import { Router } from "express";
import { deleteUser, listUser, postUser } from "../controllers/user";
import {checkAuth} from "../middlewares/checkAuth"

const router = Router();


router.get("/user", checkAuth, listUser)
router.delete("/user/:id",checkAuth, deleteUser);
router.post("/user",checkAuth, postUser);

export default router;
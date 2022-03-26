import { Router } from "express";
import { create, get, list, remove, update } from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, requireSignin } from "../middlewares/checkAuth"

const router = Router();


router.get("/products", checkAuth, list)
router.get("/products/:id",checkAuth, get);
router.post("/products/:userId",requireSignin,isAuth, create);
router.delete("/products/:id",checkAuth, remove);
router.put("/products/:id", checkAuth, update)


router.param("userId", userById)
export default router;
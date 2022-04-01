import { Router } from "express";
import { create, get, list, remove, update, search } from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth"

const router = Router();


router.get("/products", checkAuth, list)
router.get("/products/:id",checkAuth, get);
router.post("/products/:userId",requireSignin,isAuth,isAdmin, create);
router.delete("/products/:id",checkAuth, remove);
router.put("/products/:id", checkAuth, update)
router.post("/search?", search)



router.param("userId", userById)
export default router;
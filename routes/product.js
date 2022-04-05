import { Router } from "express";
import { create, get, list, remove, update, search, sort } from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth"

const router = Router();


router.get("/products", checkAuth, list)
router.get("/products/:id",checkAuth, get);
router.post("/products/:userId",requireSignin,isAuth,isAdmin, create);
router.delete("/products/:id/:userId",requireSignin,isAuth,isAdmin, remove);
router.put("/products/:id/:userId",requireSignin,isAuth,isAdmin,update)
router.get("/products/?_sort=:sort&order=:order",checkAuth, sort)
router.post("/search?", search)



router.param("userId", userById)
export default router;
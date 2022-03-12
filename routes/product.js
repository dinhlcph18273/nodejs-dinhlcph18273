import { Router } from "express";
import { create, get, list, remove, update } from "../controllers/product";
import {checkAuth} from "../middlewares/checkAuth"

const router = Router();


router.get("/products", checkAuth, list)
router.get("/products/:id",checkAuth, get);
router.delete("/products/:id",checkAuth, remove);
router.post("/products",checkAuth, create);
router.put("/products/:id", checkAuth, update)

export default router;
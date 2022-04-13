import { Router } from "express";
import { createOrder, listOrder, readOrder, removeOrder, updateOrder } from "../controllers/order";

const router = Router();

router.get("/order", listOrder)
router.get("/order/:id", readOrder)
router.post("/order", createOrder)
router.delete("/order/:id", removeOrder)
router.put("/order/:id", updateOrder)


export default router
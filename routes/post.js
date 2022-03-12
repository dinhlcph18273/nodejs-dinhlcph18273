import { Router } from "express";
import { createPost, getPost, listPost, removePost, updatePost } from "../controllers/post";

import {checkAuth} from "../middlewares/checkAuth"

const router = Router();

router.get("/post", checkAuth, listPost)
router.get("/post/:id",checkAuth, getPost);
router.delete("/post/:id",checkAuth, removePost);
router.post("/post",checkAuth, createPost);
router.put("/post/:id", checkAuth, updatePost)


export default router;
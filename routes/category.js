import {Router} from 'express';
import { createCate, listCate, read, removeCate, updateCate } from '../controllers/category';
import { userById } from '../controllers/user';
import { isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth';


const router = Router();

router.get("/category",listCate);
router.get("/category/:id",read);
router.post("/category/:userId",requireSignin,isAuth,isAdmin,createCate);
router.put("/category/:id/:userId",requireSignin,isAuth,isAdmin, updateCate);
router.delete("/category/:id/:userId",requireSignin,isAuth,isAdmin, removeCate);


router.param("userId", userById)
export default router;
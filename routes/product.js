import { Router } from "express";
import {checkAuth} from "../middlewares/checkAuth"

const router = Router();


router.get("/product", checkAuth, (req,res) => {
     const products = [
            {id: 1 ,name:"Product A"},
            {id: 2 ,name:"Product B"},
        ];
    res.json(products)
})

router.get("/product/:id",checkAuth, (req,res) =>{
    console.log(req.body);
    const products = [
            {id: 1 ,name:"Product A"},
            {id: 2 ,name:"Product B"},
        ];

        res.json(products.find(item => item.id === +req.params.id));
});
router.delete("/product/:id",checkAuth, (req,res) =>{
    console.log(req.body);
    const products = [
            {id: 1 ,name:"Product A"},
            {id: 2 ,name:"Product B"},
        ];

        res.json(products.filter(item => item.id === +req.params.id));
})
router.post("/product",checkAuth, (req,res) =>{
    console.log(req.body);
    const products = [
            {id: 1 ,name:"Product A"},
            {id: 2 ,name:"Product B"},
        ];
        products.push(req.body);
        res.json(products);
})

export default router;
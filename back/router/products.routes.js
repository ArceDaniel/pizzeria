import { Router } from "express";
import ProductsSchema from "../schemas/productsSchema.js";
//import products from '../products/products.js'
const productsRouter = Router();

productsRouter.get("/", async (req,res)=>{
    const products = await ProductsSchema.findAll({
    })
    res.json(products)
});

export default productsRouter;
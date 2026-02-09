import { Router } from "express";
import ProductController from "../controller/productController.ts";


const router = Router();

router.get('/', ProductController.getAllProduct);
router.post('/', ProductController.createProduct);

export default router;
import { Router } from "express";
import ProductController from "../controller/productController.ts";


const router = Router();

router.get('/', ProductController.getAllProduct);
router.get('/:id', ProductController.getOneProduct);
router.post('/', ProductController.createProduct);

export default router;
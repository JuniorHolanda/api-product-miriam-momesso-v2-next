import { Router } from "express";
import ProductController from "../controller/productController.ts";


const router = Router();

router.get('/produtos', ProductController.getAllProduct);
router.get('/produtos/:id', ProductController.getOneProduct);
router.post('/produtos', ProductController.createProduct);
router.put('/produtos/:id', ProductController.updateProduct);
router.delete('/produtos/:id', ProductController.deleteProduct);

export default router;
import Product from "../models/Product.ts";
import { Request, Response } from "express";

export default class ProductController {
    static async getAllProduct(req: Request, res: Response) {
        const allProduct = await Product.find({});
        res.status(200).json(allProduct);
    };

    static async createProduct(req: Request, res: Response) {
        try {
            const newProduct = await Product.create(req.body);
            res.status(201).json({
                message: "produto cadastrado com sucesso",
                ProductCreated: newProduct
            })
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "erro desconhecido"
            res.status(500).json({message: `erro ao cadastrar produto:  ${errorMessage}`})
        }
    } 
};



/*

    static async CreateProduct(req: Request, res: Response) {
        try {
            const newProduct = await Product.create(req.body);
            res.status(201).json({
                message: "criado com sucesso",
                productCreated: newProduct
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : "erro desconhecido";
            res.status(500).json({message: `${message} - falha ao cadastrar produto`})
        }
    }

*/
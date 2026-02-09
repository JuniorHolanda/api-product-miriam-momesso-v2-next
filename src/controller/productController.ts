import Product from "../models/Product.ts";
import { Request, Response } from "express";

// Retorna mensagem de erro convertida em string.
const getErrorMessage  = (e: unknown): string => {
    return e instanceof Error ? e.message : `erro desconhecido`;
}

// Envia uma resposta HTTP padronizada para erros internos (status 500)
const handleErrorResponse  = (res: Response, error: unknown, message: string) => {
    res.status(500).json({
        message: `${message}: ${getErrorMessage(error)}`
    });
};

export default class ProductController {
    static async getAllProduct(req: Request, res: Response): Promise<void> {
        try {
            const allProduct = await Product.find({});
            res.status(200).json(allProduct);
        } catch (error) {
            handleErrorResponse(res, error, "Erro ao buscar produtos");
        }
    };

    static async createProduct(req: Request, res: Response) {
        try {
            const newProduct = await Product.create(req.body);
            res.status(201).json({
                message: "produto cadastrado com sucesso",
                ProductCreated: newProduct
            })
        } catch (error) {
            handleErrorResponse(res, error, "Erro ao cadastrar produtos");
        }
    }
}
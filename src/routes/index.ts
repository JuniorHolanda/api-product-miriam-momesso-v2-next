import express from 'express';
import routesProduct from './routerProduct.ts';
import { Application,  Request, Response } from 'express';

const routes = (app: Application) => {
    app.route("/")
    .get((req: Request, res: Response) =>
        res.status(200).send("produtos Miriam Momesso"));
    app.use(express.json(), routesProduct);
};


export default routes;
import express from 'express';
import routesProduct from './routerProduct';
import { Application } from 'express';

const routes = (app: Application) => {
    app.use(express.json());
    app.use(routesProduct);
};


export default routes;
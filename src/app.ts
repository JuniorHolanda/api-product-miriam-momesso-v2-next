import express from 'express';
import router from './routers/routerProduct.ts';

const app = express();
app.use(express.json())

app.use('/', router)

export default app;
import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('rota raiz');
});

router.get('/:id', (req, res) => {

})

export default router
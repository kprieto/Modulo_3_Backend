import express, { Request, Response } from 'express';
import cors from 'cors';

const datosRouter = express();


datosRouter.use(cors({ origin: 'http://mi-sitio.com' }));

datosRouter.get('/', (req, res) => {
    res.json({ message: 'Aquí están tus datos!', data: { id: 1, value: 'Ejemplo' } });
});

export default datosRouter;
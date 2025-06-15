import express, { Request, Response } from 'express';
import cors from 'cors';

const domRouter = express();


domRouter.use(cors({ origin: 'http://localhost:3000' }));




domRouter.get('/protected', (req, res) => {
    res.json({ message: 'Esta ruta solo es accesible desde http://localhost:3000' });
});

export default domRouter;
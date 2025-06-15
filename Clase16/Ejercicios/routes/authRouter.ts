import express from 'express';
import {authMiddleware} from '../middleware/auth';

const app = express();

app.use(express.json());

app.get('/protected', authMiddleware,(req, res) => {
    res.json({ message: 'Acceso permitido a la ruta protegida.' });
});

export default app;
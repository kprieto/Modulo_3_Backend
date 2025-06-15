import express from 'express';

import authMRouter from './routes/authRouter';
const app = express();
const PORT = 3000;
app.use(express.json());


app.use('/auth', authMRouter);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


import express from 'express';

import datosRouter from './routes/datosRouter';
const app = express();
const PORT = 3000;
app.use(express.json());


app.use('/datos', datosRouter);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
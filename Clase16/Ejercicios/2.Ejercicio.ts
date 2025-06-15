import express from 'express';

import productRouter from './routes/productRouter';
const app = express();
const PORT = 3000;
app.use(express.json());


app.use('/product', productRouter);



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
import express from 'express';

import userRouter from './routes/userRouter';
const app = express();
const PORT = 3000;
app.use(express.json());


app.use('/user', userRouter);



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
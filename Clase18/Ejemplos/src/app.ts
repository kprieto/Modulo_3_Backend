import express from 'express';
import userRouter from './routers/userRouter';

const app = express();

app.use(express.json());

app.use('/user', userRouter);

export default app;
import express from 'express';
import messageRouter from './routers/messageRouter'
import userRouter from './routers/userRouter';
const app = express();

app.use(express.json());

app.use('/message', messageRouter);
app.use('/user', userRouter);

export default app;
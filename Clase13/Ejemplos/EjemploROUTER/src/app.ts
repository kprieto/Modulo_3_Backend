//importamos express
import express from 'express'

//importamos userRouter
import userRouter from './routes/userRouter'

//instancia de express
const app = express();

//middleware para pasear json
app.use(express.json());

app.use('/users', userRouter)

export default app;
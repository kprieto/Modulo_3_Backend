//importamos express
import express from 'express'

//importamos userRouter
import userRouter from './routes/userRouter'
import prodRouter from './routes/prodRouter'
import aeroRouter from './routes/aeroRouter'
import postRouter from './routes/postsRouter'


//instancia de express
const app = express();

//middleware para pasear json
app.use(express.json());

app.use('/api', userRouter)
app.use('/api', prodRouter)
app.use('/api', aeroRouter)
app.use('/api', postRouter)

export default app;
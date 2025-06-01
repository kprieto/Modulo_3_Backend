// importamos express y algunos tipos especificos de express
import express, {Application, Request, Response, NextFunction} from 'express';
import usersRouter from './routes/users-routers'
import {errorMiddleware} from './middlewares/error-middleware'

// creamos una instancia de express
const app: Application = express();

// middleware global para analizar el cuerpo de soli en formato json
app.use(express.json());

//configuracion de rutas principales de la api
app.use('/api/users', usersRouter);

//middleware para manejar las soli a rutas
app.use((req:Request, res: Response) =>{
    res.status(404).json({error: 'Endpoint no encontrado'})
})

// middleware global para manejar la api
app.use(errorMiddleware);

//definimos el puerto
const PORT = 3000;

//iniciamos el servidor
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    
})
// importamos express y algunos tipos especificos de express
import express, {Application, Request, Response, NextFunction} from 'express';
import booksRouter from './routes/books-routers'
import {errorMiddleware} from './middlewares/error-middleware'
const cors = require("cors");
// creamos una instancia de express
const app: Application = express();

// middleware global para analizar el cuerpo de soli en formato json
app.use(express.json());

app.use((req, res, next) => {
    console.log("Middleware global: Se recibió una solicitud");
    next();
});



const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];
    if (!token) {
        res.status(401).json({ error: "Acceso denegado: Token no proporcionado." });
        return; 
    }

    if (token === "123456") {
        next();
    } else {
        res.status(401).json({ error: "Acceso denegado: Token inválido." });
    }
};

// Aplicar el middleware a rutas protegidas
app.use("/secure", verifyToken);

app.get("/secure/secret", (req, res) => {
    res.status(200).json({ message: "Acceso autorizado a la ruta protegida" });
});



//configuracion de rutas principales de la api
app.use('/api/books', booksRouter);

//middleware para manejar las soli a rutas
app.use((req:Request, res: Response) =>{
    res.status(404).json({error: 'Endpoint no encontrado'})
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Error detectado:", err.message);
    res.status(err.status || 500).json({ error: `Error interno: ${err.message}` });
});

// middleware global para manejar la api
app.use(errorMiddleware);

app.use(cors());



//definimos el puerto
const PORT = 3000;

//iniciamos el servidor
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    
})
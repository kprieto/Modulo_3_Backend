import {Router} from 'express'

const mesRouter = Router();

// Rutas
mesRouter.get('/hello', (req, res) =>{
    res.json({message: 'Hola Mundo!'})
})

mesRouter.post('/hello', (req, res) =>{
    const {name} = req.body;
    res.status(201).json({message: `Hola, ${name}!`})
})

mesRouter.get('/greet/:name', (req, res) =>{
    const {name} = req.params
    res.json({message: `Hola, ${name}!`})
})

export default mesRouter;
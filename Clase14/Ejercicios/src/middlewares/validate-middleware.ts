import express, {Request, Response, NextFunction} from 'express';

export const validateMiddleware = (req: Request, res:Response, next: NextFunction): void =>{
    const {name, email,age,country }= req.body;
    if (!name || typeof name !== 'string'){
        res.status(400).json({error: "El campo 'name' es requerido y debe ser string"})
        return
    }

    if (!email || typeof email !== 'string'){
        res.status(400).json({error: "El campo 'email' es requerido y debe ser string"})
        return
    }

    if (!age || typeof age !== 'number'){
        res.status(400).json({error: "El campo 'age' es requerido y debe ser number"})
        return
    }

    if (!country || typeof country !== 'string'){
        res.status(400).json({error: "El campo 'country' es requerido y debe ser string"})
        return
    }

    next()
}
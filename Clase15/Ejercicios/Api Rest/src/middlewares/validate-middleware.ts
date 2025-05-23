import express, {Request, Response, NextFunction} from 'express';

export const validateMiddleware = (req: Request, res:Response, next: NextFunction): void =>{
    const {title, author,genre,year }= req.body;
    if (!title || typeof title !== 'string'){
        res.status(400).json({error: "El campo 'title' es requerido y debe ser string"})
        return
    }

    if (!author || typeof author !== 'string'){
        res.status(400).json({error: "El campo 'author' es requerido y debe ser string"})
        return
    }

    if (!genre || typeof genre !== 'string'){
        res.status(400).json({error: "El campo 'genre' es requerido y debe ser string"})
        return
    }

    if (!year || typeof year !== 'number'){
        res.status(400).json({error: "El campo 'year' es requerido y debe ser string"})
        return
    }

    next()
}


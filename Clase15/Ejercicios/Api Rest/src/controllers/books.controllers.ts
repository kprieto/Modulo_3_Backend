import {Request, Response} from "express";

import {BooksModel} from '../models/books-models';

//Controlador para obtener todos los libros
export const getAllBooks = (req: Request, res: Response): void =>{
    const books = BooksModel.getAllBooks();
    res.json(books);
}

// controlador para libros por id
export const getBooksById = (req: Request, res: Response): void =>{
    const {id}= req.params;
    // extraemos el parametro id de la soli
    const book = BooksModel.getBooksById(id)
    // llamamos al metodo del modelo para buscar el libro por id
    if(!book){
        res.status(404).json({error: "Libro no encontrado"})
        return
    }

    res.json(book)
}


// controlador para libros por autor
export const getBooksByAuthor = (req: Request, res: Response): void =>{
    const {author}= req.params;
    // extraemos el parametro autor de la soli
    const book = BooksModel.getBooksByAuthor(author)
    // llamamos al metodo del modelo para buscar el libro por autor
    if(!book){
        res.status(404).json({error: "Libro no encontrado"})
        return
    }

    res.json(book)
}

export const createBooks = (req: Request, res: Response): void =>{
    const newBook = BooksModel.createBooks(req.body);
    // llamemos al metodo del modulo para agregar un nuevo libro con los datos de la soli
    res.status(201).json(newBook)
}

export const updateBooks = (req: Request, res: Response): void =>{
    const {id}= req.params;
    // extraemos el parametro id de la soli
    const updateBooks = BooksModel.updateBooks(id, req.body);
    res.json(updateBooks)
}

export const deleteBooks = (req: Request, res: Response): void =>{
    const {id}= req.params;
    // extraemos el parametro id de la soli
    const isDeleted = BooksModel.deleteBooks(id);
    if (!isDeleted) {
        res.status(404).json({error: "Libro no encontrado para ser borrado"})
        return
    }
    res.status(204).send();
}
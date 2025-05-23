import {Router} from  'express';
// importacion de funciones
import {
    getAllBooks,
    getBooksById,
    getBooksByAuthor,
    createBooks,
    updateBooks,
    deleteBooks
} from '../controllers/books.controllers'

import {validateMiddleware} from '../middlewares/validate-middleware';

// creamos la instancia del router (para majenar las rutas)
const router: Router = Router();

//Rutas
router.get('/', getAllBooks); 
router.get('/:id', getBooksById); 
router.get('/author/:author', getBooksByAuthor);
router.post('/', validateMiddleware, createBooks); 
router.put('/:id', updateBooks); 
router.delete('/:id', deleteBooks);

export default router;
import {Router} from  'express';
// importacion de funciones
import {
    getAllUsers,
    getUsersById,
    getUsersByName,
    createUsers,
    updateUsers,
    deleteUsers,
    countUsersDominio,
    addUsers,
    getUsersSorted,
    getUsersByAgeRange,
    getUsersStats,
    getExternalUsers,
    searchExternalUser
} from '../controllers/users.controllers'

import {validateMiddleware} from '../middlewares/validate-middleware';

// creamos la instancia del router (para majenar las rutas)
const router: Router = Router();

//Rutas
router.get("/sorted", getUsersSorted);
router.get('/by-age', getUsersByAgeRange);
router.get("/stats", getUsersStats);
router.get("/external", getExternalUsers);
router.get("/external/search", searchExternalUser);
router.get('/', getAllUsers); 
router.get('/:id', getUsersById); 
router.get('/name/:name', getUsersByName);
router.post('/', validateMiddleware, createUsers); 
router.put('/:id', updateUsers); 
router.delete('/:id', deleteUsers);
router.post('/count', countUsersDominio); 
router.post("/add", addUsers);



export default router;
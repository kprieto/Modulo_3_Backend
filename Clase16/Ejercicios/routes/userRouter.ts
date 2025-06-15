import {Router} from 'express'
import { z } from 'zod';

const userRouter = Router();

const users = [
    { id: 1, name: "Karen López"},
    { id: 2, name: "Luis Martínez" },
    { id: 3, name: "Ana Torres" },
    { id: 4, name: "Carlos Rivera"},
    { id: 5, name: "Sofía Méndez"}
];

const userSchema = z.object({
    id: z.number(),
    name: z.string()
});


userRouter.get('/', (req,res) => {
    res.json(users);
});

userRouter.post('/', (req,res)=>{
    const parsed = userSchema.safeParse(req.body);

    if (!parsed.success) {
        res.status(400).json({ error: 'Datos inválidos', issues: parsed.error.errors });
        return
    }

    const { id, name } = parsed.data;

    if (id === undefined || !name) 
    { 
        res.status(400).json({ error: 'Faltan datos: id y name son requeridos.' }); 
        return
    }
    const userExists = users.some(user => user.id === id); 
    if (userExists) 
        { 
            res.status(409).json({ error: 'Ya existe un usuario con ese id.' }); 
            return
        } 
    const newUser = { id, name }; 
    users.push(newUser); 

        
    res.status(201).json({message: 'Usuario registrado con éxito!', user: newUser})
})

userRouter.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    if (!name) {
        res.status(400).json({ error: 'El campo name es requerido para actualizar.' });
        return
    }

    const user = users.find(user => user.id === id);
    if (!user) {
        res.status(404).json({ error: 'Usuario no encontrado.' });
        return 
    }

    user.name = name;
    res.json({ message: 'Usuario actualizado con éxito.', user });
});


userRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        res.status(404).json({ error: 'Usuario no encontrado.' });
        return
    }

    const deletedUser = users.splice(index, 1)[0];
    res.json({ message: 'Usuario eliminado con éxito.', user: deletedUser });
});

userRouter.use((req,res) => {
    res.status(404).json({ error: "Ruta no encontrada." });
});

export default userRouter;
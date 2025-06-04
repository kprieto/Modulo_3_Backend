import {Router} from 'express'

const userRouter = Router();

const users = [
    { id: 1, name: "Karen López", email: "karen@example.com" },
    { id: 2, name: "Luis Martínez", email: "luis@example.com" },
    { id: 3, name: "Ana Torres", email: "ana@example.com" },
    { id: 4, name: "Carlos Rivera", email: "carlos@example.com" },
    { id: 5, name: "Sofía Méndez", email: "sofia@example.com" }
];

userRouter.post('/register',(req, res) =>{
    const {username, password} = req.body;
    if(!username || !password){
        res.status(400).json({message: "Todos los campos son obligatorios."})
    }

    res.status(201).json({message: 'Usuario registrado con éxito!', user: {username,password}})
});

userRouter.get('/', (req,res) => {
    res.json(users);
});

userRouter.post('/', (req,res) => {
    const {id, name, email} = req.body;
    const newUser = { id, name, email };
    users.push(newUser);
    res.status(201).json({message: 'Usuario registrado con éxito!', user: newUser})

});

userRouter.use((req,res) => {
    res.status(404).json({ error: "Ruta no encontrada." });
});

export default userRouter;
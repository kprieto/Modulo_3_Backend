import {Router} from 'express';

const router = Router();

const usuarios = [
    { id: 1, name: "Karen", email: "karen@gmail.com" },
    { id: 2, name: "Luis", email: "luis@gmail.com" },
    { id: 3, name: "Ana", email: "ana@gmail.com" },
];

router.get("/users", (req, res) => {
    res.json(usuarios);
});

router.get("/users/:id", (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const usuario = usuarios.find(user => user.id === idBuscado);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ error: `Usuario con ID ${idBuscado} no encontrado.` });
    }
});

export default router;
import {Request, Response, Router} from 'express';

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

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Función para obtener información de un usuario por ID
async function getUserById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;

        if (isNaN(Number(id))) {
            res.status(400).json({ error: "El ID debe ser un número válido." });
            return;
        }

        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
            res.status(404).json({ error: `Usuario con ID ${id} no encontrado.` });
            return;
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

router.get("/usersInfo/:id", getUserById);


export default router;
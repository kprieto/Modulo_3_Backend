import {Request, Response, Router} from 'express';

const router = Router();

const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function crearPost(req: Request, res: Response): Promise<void> {
    try {
        const newPost = req.body; 

        if (!newPost.title || !newPost.body || !newPost.userId) {
            res.status(400).json({ error: "❌ Debes enviar un título, contenido y userId." });
            return;
        }

        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
        });

        if (!response.ok) throw new Error("❌ Error al crear el post en JSONPlaceholder.");

        const data = await response.json();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

// Ruta POST /posts - Crea un nuevo post
router.post("/posts", crearPost);

async function eliminarPost(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error("Error al eliminar el post en JSONPlaceholder API.");

        const data = await response.json();
        res.json({ message: "Posts eliminado exitosamente.", data });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}


router.delete("/posts/:id", eliminarPost);

export default router;
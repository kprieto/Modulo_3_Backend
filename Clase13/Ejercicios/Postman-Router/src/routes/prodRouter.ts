import express, { Request, Response, Router } from "express";

const router = Router();

const productos = [
    { id: 1, titulo: "Teclado", precio: 52 },
    { id: 2, titulo: "Celular", precio: 3000 },
    { id: 3, titulo: "Computadora", precio: 15000 },
];

router.get("/productos", (req, res) => {
    res.json(productos);
});

router.get("/productos/:id", (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const producto = productos.find(prod => prod.id === idBuscado);

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ error: `Producto con ID ${idBuscado} no encontrado.` });
    }
});

const API_URL = "https://fakestoreapi.com/products";

interface Producto {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

async function crearProducto(req: Request, res: Response): Promise<void> {
    try {
        const nuevoProducto: Producto = req.body; 

        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoProducto),
        });

        if (!response.ok) throw new Error("Error al enviar el producto a Fake Store API.");

        const data = await response.json();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}


router.post("/productos", crearProducto);

async function actualizarProductoPrecio(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params; 
        const { price } = req.body; 

        if (!price || isNaN(price)) {
            res.status(400).json({ error: "El precio debe ser un número válido." });
            return;
        }

        const response = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        });

        if (!response.ok) throw new Error("Error al actualizar el precio en Fake Store API.");

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}


router.patch("/productos/:id", actualizarProductoPrecio);

async function eliminarProducto(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error("Error al eliminar el producto en Fake Store API.");

        const data = await response.json();
        res.json({ message: "Producto eliminado exitosamente.", data });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}


router.delete("/productos/:id", eliminarProducto);

export default router;
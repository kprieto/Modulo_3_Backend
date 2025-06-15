import {Router} from 'express'
import { z } from 'zod';

const productRouter = Router();

const products = [
    { id: 1, name: "Laptop"},
    { id: 2, name: "Celular" },
    { id: 3, name: "Teclado" },
    { id: 4, name: "Mouse"},
    { id: 5, name: "Computadora"}
];

const userSchema = z.object({
    id: z.number(),
    name: z.string()
});

productRouter.get('/', (req,res) => {
    res.json(products);
});

productRouter.post('/', (req,res)=>{
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
    const productExists = products.some(product => product.id === id); 
    if (productExists) 
        { 
            res.status(409).json({ error: 'Ya existe un producto con ese id.' }); 
            return
        } 
    const newProduct = { id, name }; 
    products.push(newProduct); 

        
    res.status(201).json({message: 'Producto registrado con éxito!', product: newProduct})
})

productRouter.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    if (!name) {
        res.status(400).json({ error: 'El campo name es requerido para actualizar.' });
        return
    }

    const product = products.find(product => product.id === id);
    if (!product) {
        res.status(404).json({ error: 'Producto no encontrado.' });
        return 
    }

    product.name = name;
    res.json({ message: 'Producto actualizado con éxito.', product });
});


productRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
        res.status(404).json({ error: 'Producto no encontrado.' });
        return
    }

    const deletedProduct = products.splice(index, 1)[0];
    res.json({ message: 'Producto eliminado con éxito.', product: deletedProduct});
});

productRouter.use((req,res) => {
    res.status(404).json({ error: "Ruta no encontrada." });
});

export default productRouter;
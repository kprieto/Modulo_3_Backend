import { z } from 'zod';
import express, { Request, Response } from 'express';


const taskSchema = z.object({
  title: z.string().min(1, 'El título es obligatorio'), // title debe ser string y no vacío
  completed: z.boolean().default(false) // completed es opcional y por defecto es false
});



const tasksRouter = express();
tasksRouter.use(express.json());

interface Task {
    title: string;
    completed: boolean;
}

let tasks: Task[] = [];

tasksRouter.post('/', (req, res) => {
    const parsed = taskSchema.safeParse(req.body);

    if (!parsed.success) {
        res.status(400).json({ error: 'Datos inválidos', issues: parsed.error.errors });
        return 
    }

    const newTask = parsed.data;
    tasks.push(newTask);

    res.status(201).json({ message: 'Tarea registrada con éxito!', task: newTask });
});

export default tasksRouter;
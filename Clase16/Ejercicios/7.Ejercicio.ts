import express from 'express';

import taskRouter from './routes/tasksRouter';
const app = express();
const PORT = 3000;
app.use(express.json());


app.use('/tasks', taskRouter);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
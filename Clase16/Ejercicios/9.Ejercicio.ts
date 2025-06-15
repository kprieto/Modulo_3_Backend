import express from 'express';

import domRouter from './routes/dominioRouter';
const app = express();
const PORT = 3001;
app.use(express.json());


app.use('/dom', domRouter);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default domRouter;
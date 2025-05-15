// importamos express
const express = require('express')

// creacion de la instancia de express
const app = express();

// definimos un puerto
const PORT= 3000;

// ruta get para url raiz
app.get('/', (res,req)=> {
    res.send('Hola chicas de ada, bienvenidas a express!')
})

//iniciamos el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
})
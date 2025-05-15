/*Ejercicio 2: Crear un Endpoint POST para agregar usuarios 
Consigna: Ahora vamos a permitir que el cliente agregue nuevos usuarios a la 
lista. Tu tarea es crear un endpoint POST que reciba los datos del usuario desde 
el cuerpo de la solicitud en formato JSON. Los datos deben incluir name y email. 
Si alguno de estos datos falta, el servidor debe responder con un error (código 
400). 
Recuerda usar express.json() como middleware para procesar los datos del 
cuerpo de la solicitud. */

const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json());

const usuarios = [
    { name: "Karen", email: "karen@gmail.com" },
    { name: "Luis", email: "luis@gmail.com" },
    { name: "Ana", email: "ana@gmail.com" }
];


app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});


app.post("/usuarios", (req, res) => {
    const { name, email } = req.body;


    if (!name || !email) {
        return res.status(400).json({ error: "El nombre y el email son obligatorios." });
    }


    const nuevoUsuario = { name, email };
    usuarios.push(nuevoUsuario);

    res.status(201).json({ mensaje: "Usuario agregado exitosamente.", usuario: nuevoUsuario });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/usuarios`);
});

/* curl -X POST http://localhost:3000/usuarios -H "Content-Type: application/json" -d '{"name": "Carlos", "email": "carlos@gmail.com"}'
*/
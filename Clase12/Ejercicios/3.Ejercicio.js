/*Ejercicio 3: Usar parámetros dinámicos con :id 
Consigna: En este ejercicio, vamos a permitir que el cliente busque información 
de un usuario por su ID. Crea un endpoint GET que reciba un parámetro 
dinámico :id en la URL (por ejemplo, /users/1). Usa req.params para capturar 
este valor y busca al usuario correspondiente en una lista. Si no se encuentra el 
usuario, responde con un error 404.*/

const express = require("express");
const app = express();
const PORT = 3000;


const usuarios = [
    { id: 1, name: "Karen", email: "karen@gmail.com" },
    { id: 2, name: "Luis", email: "luis@gmail.com" },
    { id: 3, name: "Ana", email: "ana@gmail.com" }
];


app.get("/usuarios/:id", (req, res) => {
    const idBuscado = parseInt(req.params.id); // Convertir el parámetro a número
    const usuario = usuarios.find(user => user.id === idBuscado);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ error: `Usuario con ID ${idBuscado} no encontrado.` });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/usuarios/`);
});
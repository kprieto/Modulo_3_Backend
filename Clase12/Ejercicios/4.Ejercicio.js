/*Ejercicio 4: Practicando desestructuración de objetos 
Consigna: Dado el siguiente objeto JSON enviado en el cuerpo de la solicitud: 
{ 

"name": "Katherine Johnson", 
"email": "katherine@example.com", 
"age": 42 
}
Crea un endpoint POST que use desestructuración para extraer name y email. 
Luego, responde con un mensaje que incluya estos valores. Si el cliente envía 
datos incompletos, responde con un error 400. */

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());


app.post("/usuario", (req, res) => {
    const { name, email } = req.body; 

    if (!name || !email) {
        return res.status(400).json({ error: "El nombre y el email son obligatorios." });
    }

    res.status(200).json({
        mensaje: `Usuario registrado: ${name} (${email})`
    });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/usuario`);
});

// Objetivo creamos un payloas personalizado:

//1. importacion
const jwt = require('jsonwebtoken');

//2. Definimos el payload
const payload ={
    userId: 123,
    role: "admin",
    name: "Karen Prieto",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000 + (60 * 60))
}
// Clave secreta
const secretKey = "mi_clave_secreta"
//3. Crear el token JWT
const token = jwt.sign(payload, secretKey, {algorithm: 'HS256'})
console.log("Token jwt generado: ", token);

//4.Decodificar y verificar el token
try {
    const decoded = jwt.verify(token,secretKey)
    console.log("Payload decodificado: ", decoded);
    
} catch (error){
    console.error("Token invalido o expirado: ", error.message)
}

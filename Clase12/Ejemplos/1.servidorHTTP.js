//paso 1: Importamos el modulo http
const http = require('http')

//paso 2: Creamos el servidor
// -req representa la solicitud
// -res representa la respuesta
const servidor = http.createServer((req, res) => {
    // establecemos el codigo de estado de la respuesta 200 (ok)
    // indicando que salio exitosa
    res.statusCode = 200;
    // Configurar el encabezado
    // - content-type: para que el cliente sepa el contenido
    // - text/plain: el contenido es texto plano
    res.setHeader('Content-Type', 'text/plain');
    // envia la respuesa al cliente con el mensaje y 
    //finalizamos la respuesta
    res.end('Hola Chicas!')
})

servidor.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})

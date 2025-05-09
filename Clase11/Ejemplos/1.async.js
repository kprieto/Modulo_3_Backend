// Funcion asincrona con un saludo

async function saludo(){
    return "Hola chicas!";
}

//Llamamos a la funcion y manejamos la promesa resultante con .then
// si "saldo" se resuelve imprime el mensaje en consola
saludo().then((mensaje) => console.log(mensaje));

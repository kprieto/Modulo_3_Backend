/*Ejercicio 4: Función que devuelve un objeto 
Consigna: Crea una función llamada crearLibro que acepte tres parámetros: 
titulo (string), autor (string) y paginas (number). La función debe devolver un 
objeto con esas propiedades. Luego, crea dos libros utilizando la función y 
muestra sus detalles en la consola. */
function crearLibro(titulo:string, autor:string, paginas:number): Object{
    return { titulo, autor, paginas };
}


const cienAnio = crearLibro("Cien Años de Soledad", "Gabriel García Márquez", 417);
const laSangreManda = crearLibro("La sangre manda", "Stephen King", 460);

console.log("Detalles del primer libro:");
console.log(cienAnio);

console.log("Detalles del segundo libro:");
console.log(laSangreManda);
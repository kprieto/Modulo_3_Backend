/*Ejercicio 2: Creación de Objetos y Atributos 
1. Define un objeto que represente un libro con las siguientes propiedades: 
título, autor, y año de publicación. 
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola. */

interface Libro {
    titulo: string;
    autor: string;
    anioPublicacion: number;
}


export const libro: Libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967
};

console.log("Propiedades del libro:");
console.log(`Título: ${libro.titulo}`);
console.log(`Autor: ${libro.autor}`);
console.log(`Año de Publicación: ${libro.anioPublicacion}`);
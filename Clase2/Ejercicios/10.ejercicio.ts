/*Ejercicio 10: Funciones y arrays de objetos 
Consigna: Crea una función llamada listarLibros que acepte un array de objetos 
libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La 
función debe recorrer el array y mostrar los detalles de cada libro en la consola. */
interface Libro {
    titulo: string;
    autor: string;
}
let libros: Libro[]= [{titulo : "La sangre manda", autor: "Stephen King" },
    {titulo : "Cien años de soledad", autor: "Gabriel García Márquez" }, 
    {titulo : "El instituto", autor: "Stephen King" }]


function listarLibros(libros: Libro[]): void {
    console.log("Lista de libros:");
    libros.forEach((libro, index) => {
        console.log(`${index + 1}. Título: "${libro.titulo}", Autor: ${libro.autor}`);
    });
}

listarLibros(libros);
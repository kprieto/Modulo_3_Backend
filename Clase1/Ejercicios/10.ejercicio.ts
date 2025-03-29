/*Ejercicio 10: Uso de objetos 
Declara un objeto en TypeScript con propiedades de tipo string, number y 
boolean. Accede a estas propiedades e imprímelas en la consola. */

export let libro = {
    titulo : "La sangre manda",
    autor : "Stephen King",
    paginas : 460,
    esTerror : true
}

console.log(`Titulo: ${libro.titulo}`);
console.log(`Autor: ${libro.autor}`);
console.log(`Paginas: ${libro.paginas}`);
console.log(`¿Es Terror?: ${libro.esTerror === true ? "Si" : "No"}`);





/*Ejercicio 4: Parámetros opcionales simulados 
Declara dos variables, una para almacenar un nombre y otra para almacenar una 
edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no 
proporcionada". Si se asigna la edad, imprímela junto al nombre. */

export let nombre: string = "Karen";
export let edad: any;
let mensaje : string = edad === undefined?`Nombre: ${nombre}, Edad no proporcionada`:`Nombre: ${nombre}, Edad: ${edad}`;
console.log(mensaje);


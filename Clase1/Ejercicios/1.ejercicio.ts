/*Ejercicio 1: Declarar y asignar tipos primitivos 
Crea un programa en TypeScript donde se declaren variables para almacenar tu 
nombre, edad y si eres estudiante, utilizando los tipos de datos correctos. 
Luego, imprime esos valores en la consola. */

export let nombre: string = "Karen";
let edad: number = 36;
export let estudiante: boolean = true;

console.log(`Mi nombre es ${nombre}, tengo ${edad} anios y soy ${estudiante==true?"Estudiante":"No Estudiante"} de TS.`)
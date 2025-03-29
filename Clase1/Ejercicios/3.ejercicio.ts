/*Ejercicio 3: Combina variables primarias 
Declara variables para almacenar tu nombre y edad. Combina esas variables en 
un solo mensaje usando plantillas de cadena (template literals) e imprímelo en 
la consola. */

export let nombre: string = "Karen";
export let edad: number = 36;
let mensaje: string = `¡Hola! Mi nombre es ${nombre} y tengo ${edad} anios.`;
console.log(mensaje);

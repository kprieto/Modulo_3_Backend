/*Actividad 8: Funciones de Orden Superior 
Crea un módulo higherOrderFunctions.ts que contenga una función: 
• createMultiplier(factor: number): (num: number) => number: devuelve otra 
función que multiplica un número por el factor dado. 
Exporta esta función como exportación por defecto. En main.ts, importa 
createMultiplier, crea un multiplicador (por ejemplo, para multiplicar por 2) y 
utiliza la función devuelta para multiplicar un número y mostrar el resultado en 
la consola. */
import createMultiplier from "./1.higherOrderFunctions";

const factor = 2;
const multiplicarPorDos = createMultiplier(factor);

const numMultiplica = 5;
const resultado = multiplicarPorDos(5); 

console.log(`El resultado de multiplicar por ${factor} es: ${resultado}`);
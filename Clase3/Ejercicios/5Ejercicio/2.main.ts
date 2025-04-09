/*Actividad 5: Re-exportación de Módulos 
Crea un módulo index.ts que re-exporte todas las funciones y constantes de los 
módulos mathUtils.ts y stringUtils.ts. 
En main.ts, importa todo desde index.ts y utiliza al menos una función de cada 
módulo, mostrando el resultado en la consola. */

import{
    add,
    subtract,
    capitalize,
    reverse
} from './1.index'

const suma = add(5,10)
console.log(`Suma es: ${suma}`);

const resta = subtract(6,2)
console.log(`Resta es: ${resta}`);

const convertidor = capitalize("typescript")
console.log(`Texto con primer letra en mayusculas: ${convertidor}`);

const invertido = reverse("Typescript")
console.log(`Texto invertido: ${invertido}`);

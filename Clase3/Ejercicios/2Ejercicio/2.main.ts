/*Actividad 2: Exportaciones Nombradas 
En el archivo stringUtils.ts, crea dos funciones: 
• capitalize(str: string): string: devuelve el string con la primera letra en 
mayúscula. 
• reverse(str: string): string: devuelve el string al revés. 
Exporta ambas funciones como exportaciones nombradas. Luego, en main.ts, 
importa las funciones y utilízalas con una cadena de texto, mostrando el 
resultado en la consola. */

import { capitalize, reverse } from "./1.stringUtils";


const texto = "typescript";


const textoCapitalizado = capitalize(texto);
console.log(`Texto con la primera letra en mayúscula: ${textoCapitalizado}`);


const textoInvertido = reverse(texto);
console.log(`Texto al revés: ${textoInvertido}`);
/*Actividad 7: Cálculo de Áreas 
Crea un módulo shapes.ts que contenga las siguientes funciones: 
• circleArea(radius: number): number: devuelve el área de un círculo. 
• squareArea(side: number): number: devuelve el área de un cuadrado. 
Exporta ambas funciones como exportaciones nombradas. En main.ts, importa 
las funciones y úsalas para calcular y mostrar las áreas en la consola. */

import { circleArea, squareArea } from "./1.shapes";

const radioCirculo = 8;
const ladoCuadrado = 10;

let areaCirculo = circleArea(radioCirculo);
console.log(`El área del círculo con radio ${radioCirculo} es: ${areaCirculo}`);

let areaCuadrado = squareArea(ladoCuadrado);
console.log(`El área del cuadrado con lado ${ladoCuadrado} es: ${areaCuadrado}`);

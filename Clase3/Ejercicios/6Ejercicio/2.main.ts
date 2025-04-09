/*Actividad 6: Uso de Namespaces 
Crea un namespace llamado Geometry en un archivo geometry.ts que contenga 
las siguientes funciones: 
• areaOfCircle(radius: number): number: devuelve el área de un círculo. 
• areaOfSquare(side: number): number: devuelve el área de un cuadrado. 
Exporta ambas funciones. En main.ts, utiliza el namespace Geometry para llamar 
a las funciones y muestra los resultados en la consola.*/ 

import { Geometry } from "./1.geometry";

const radioCirculo = 5;
const ladoCuadrado = 4;

let areaCirculo = Geometry.areaOfCircle(radioCirculo);
console.log(`El área del círculo con radio ${radioCirculo} es: ${areaCirculo}`);

let areaCuadrado = Geometry.areaOfSquare(ladoCuadrado);
console.log(`El área del cuadrado con lado ${ladoCuadrado} es: ${areaCuadrado}`);
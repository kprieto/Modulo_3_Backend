/*Ejercicio 6: Uso de unknown 
Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta 
variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los 
valores. */

let variableUnknow : unknown = "Aprendiendo TS"
console.log(typeof(variableUnknow) ,"-", variableUnknow);
variableUnknow = 698;
console.log(typeof(variableUnknow) ,"-", variableUnknow);
variableUnknow = true;
console.log(typeof(variableUnknow) ,"-", variableUnknow);



/*Ejercicio 8: Funciones con diferentes tipos de retorno 
Consigna: Crea una función llamada calcularArea que acepte el tipo de figura 
("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada 
tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La 
función debe retornar el área de la figura. Usa tipos específicos para cada caso. */

type Figura = "circulo" | "rectangulo";


function calcularArea(figura: Figura, ...valores: number[]): number {
    if (figura === "circulo") {
        let [radio] = valores; // Extraer el radio
        if (radio === undefined || radio <= 0) {
        throw new Error("El radio debe ser un número positivo.");
        }
        return Math.PI * Math.pow(radio, 2);
    } else if (figura === "rectangulo") {
        let [largo, ancho] = valores;
        if (
        largo === undefined ||
        ancho === undefined ||
        largo <= 0 ||
        ancho <= 0
        ) {
        throw new Error("El largo y el ancho deben ser números positivos.");
        }
        return largo * ancho; 
    } else {
        throw new Error("Tipo de figura no válido.");
    }
}


const areaCirculo = calcularArea("circulo", 5);
console.log(`El área del círculo es: ${areaCirculo}`);

const areaRectangulo = calcularArea("rectangulo", 4, 6);
console.log(`El área del rectángulo es: ${areaRectangulo}`);
/*Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación) 
Implementa una clase Calculadora que tenga un método sumar. El método debe 
estar sobrecargado para permitir la suma de: 
• Dos números enteros. 
• Tres números enteros. 
• Dos cadenas, concatenando las dos cadenas. */

class Calculadora {
    sumar(a: number, b: number): number; 
    sumar(a: number, b: number, c: number): number; 
    sumar(a: string, b: string): string; 
    sumar(a: any, b: any, c?: any): any { 
        if (typeof a === "number" && typeof b === "number") {
            if (c !== undefined) {
                return a + b + c; 
            } else {
                return a + b; 
            }
        } else if (typeof a === "string" && typeof b === "string") {
            return a + b; 
        } else {
            console.log("Parámetros no válidos."); 
        }
    }
}

const calculadora = new Calculadora();
console.log(calculadora.sumar(5, 10)); 
console.log(calculadora.sumar(5, 10, 15));    
console.log(calculadora.sumar("Hola, ", "mundo!")); 
//console.log(calculadora.sumar(5, "10")); // Error: Parámetros no válidos.
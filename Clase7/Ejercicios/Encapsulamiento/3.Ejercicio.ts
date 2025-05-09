/*3. Ejercicio de Estudiante 
Diseña una clase Estudiante que contenga propiedades privadas para nombre, 
edad, y calificaciones. Implementa métodos para agregar calificaciones y 
calcular el promedio. Imprime un mensaje en caso de que se intente agregar 
una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para 
calcular el promedio. Encapsulamiento */

class Estudiante {
    private _nombre: string;
    private _edad: number;  
    private _calificaciones: number[]; 

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
        this._calificaciones = [];
    }

    public set agregarCalificacion(calificacion: number){
        if (calificacion >= 0 && calificacion <= 100) {
            this._calificaciones.push(calificacion); 
            console.log(`Calificación ${calificacion} agregada para ${this._nombre}.`);
        } else {
            console.log("Calificación inválida. Debe estar entre 0 y 100.");
        }
    }

    public calcularPromedio(){
        if (this._calificaciones.length > 0) {
            const suma = this._calificaciones.reduce((a, b) => a + b, 0); 
            const promedio = suma / this._calificaciones.length; 
            console.log(`El promedio de ${this._nombre} es: ${promedio.toFixed(2)}`);
        } else {
            console.log("No hay calificaciones para calcular el promedio.");
        }
    }


}
export const estudiante1 = new Estudiante("Juan", 20);
estudiante1.agregarCalificacion = 85;   
estudiante1.agregarCalificacion = 90;
estudiante1.agregarCalificacion = 110; 
estudiante1.calcularPromedio(); 
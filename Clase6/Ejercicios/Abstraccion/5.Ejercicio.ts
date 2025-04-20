/*Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces 
Diseña un sistema de transporte público. Define: 
• Una interfaz VehiculoElectrico con el método cargarBateria(). 
• Una clase abstracta Transporte con el método abstracto mover(). 
Implementa ambas estructuras en una clase concreta AutobusElectrico. */

interface VehiculoElectrico {
    cargarBateria(): void;          
}
abstract class Transporte {
    protected velocidad: number;
    constructor(velocidad: number) {
        this.velocidad = velocidad;
    }
    abstract mover(): void; 
}
class AutobusElectrico extends Transporte implements VehiculoElectrico {
    constructor(velocidad: number) {
        super(velocidad);
    }
    mover(): void {
        console.log(`El autobus electrico se mueve a ${this.velocidad} km/h.`);
    }
    cargarBateria(): void {
        console.log("Cargando bateria del autobus electrico.");
    }
}   
const autobus = new AutobusElectrico(80);
autobus.mover();
autobus.cargarBateria();
const autobus2 = new AutobusElectrico(100);
autobus2.mover();   
autobus2.cargarBateria();
// const autobus3 = new Transporte(80); // Error



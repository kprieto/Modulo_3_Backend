/*Ejercicio 7: Comparación Completa - Sistema de Transporte Público 
Diseña un sistema que combine interfaces y clases abstractas para gestionar un 
transporte público. 
• Crea una clase abstracta Transporte con un método abstracto mover(). 
• Define dos interfaces: 
o Electrico con el método cargarBateria(). 
o Combustible con el método llenarTanque(). 
• Implementa dos clases: 
o AutobusElectrico: Extiende de Transporte e implementa Electrico. 
o Taxi: Extiende de Transporte e implementa Combustible. */

//Interfaz electrico
interface Electrico {
    cargarBateria(): void;      
}

// Interfaz combustible
interface Combustible {
    llenarTanque(): void; 
}

// Clase abstracta Transporte
export abstract class Transporte {
    
    constructor(protected pasajeros: number){

    } 
    //Metodo abstracto que deben implementar las subclases
    abstract mover(): void;

    //metedo concreto para describir el transporte
    describir():void{
        console.log(`Este transporte lleva ${this.pasajeros} pasajeros.`);
        
    }
}

// Clase autobusElectrico que extiende trasporte e implementa electrico
class AutobusElectrico extends Transporte implements Electrico{
    mover(): void{
        console.log('El autobus electrico se mueve por la ciudad.');
        
    }

    cargarBateria(): void {
        console.log('Cargando la bateria del autobus...');
        
    }
}

// Clase taxi que extiende de transporte e implemeta combustible
class Taxi extends Transporte implements Combustible{
    mover(): void {
        console.log('El taxi se mueve por la ruta.');
        
    }

    llenarTanque(): void {
        console.log('Llenando el tanque del taxi...');
        
    }
}

//Pruebas:
const autobus = new AutobusElectrico(30);
autobus.describir();
autobus.cargarBateria();
autobus.mover();

const taxi = new Taxi(4);
taxi.describir();
taxi.llenarTanque();
taxi.mover();


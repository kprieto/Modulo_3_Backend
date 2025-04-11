/*Ejercicio 9: Sistema de Gestión de Vehículos 
1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases: 
o Vehiculo: Clase base con propiedades como marca, modelo y un 
método para mostrar información del vehículo. 
o Coche: Clase que extiende Vehiculo e incluye una propiedad para 
tipoCombustible y un método para mostrar la información completa 
del coche. 
o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad 
para cilindrada y un método para mostrar la información completa 
de la motocicleta. */
class Vehiculo {
    public marca: string;
    public modelo: string;

    constructor(marca: string,modelo: string) {
        this.marca = marca;
        this.modelo = modelo;

    }

    mostrarInformacion(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}


export class Coche extends Vehiculo {
    public tipoCombustible: string;

    constructor(marca: string,modelo: string, tipoCombustible: string) {
        super(marca, modelo); 
        this.tipoCombustible = tipoCombustible;
    }

    
    mostrarInformacion(): string {
        return `${super.mostrarInformacion()}, Tipo Combustible: ${this.tipoCombustible}`;
    }
}


class Motocicleta extends Vehiculo {
    public cilindrada: number
    constructor(marca: string, modelo: string, cilindrada: number) {
        super(marca, modelo); 
        this.cilindrada = cilindrada;
    }


    mostrarInformacion(): string {
        return `${super.mostrarInformacion()}, Cilindrada: ${this.cilindrada}`;
    }
}

// Crear un objeto de la clase Vehiculo
const vehiculo = new Vehiculo("Nissan", "March");
console.log(vehiculo.mostrarInformacion());

// Instancia de la clase Coche
const coche = new Coche("Toyota", "Corolla", "Gasolina");
console.log(coche.mostrarInformacion());

// Instancia de la clase Motocicleta
const motocicleta = new Motocicleta("Yamaha", "R1", 1000);
console.log(motocicleta.mostrarInformacion());
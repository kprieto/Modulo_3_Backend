/*Ejercicio 11: Sistema de Gestión de Vehículos 
Consigna: Crea una clase base Vehiculo con propiedades como marca, modelo, 
y un método detallesVehiculo(). Luego, crea dos clases derivadas: Automovil y 
Moto, cada una con propiedades adicionales y sobrescribiendo el método 
detallesVehiculo(). 
Crea también una interfaz Mantenimiento que tenga el método 
calcularCostoMantenimiento(). Ambas clases derivadas deben implementar esta 
interfaz, pero con lógicas distintas para calcular el costo del mantenimiento. */

interface Mantenimiento {
    calcularCostoMantenimiento(): number;

}

export class Vehiculo {
    protected marca: string;
    protected modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    detallesVehiculo(): void {
        console.log(`Vehículo: ${this.marca} ${this.modelo}`);
    }
}

class Automovil extends Vehiculo implements Mantenimiento {
    private numeroPuertas: number;

    constructor(marca: string, modelo: string, numeroPuertas: number) {
        super(marca, modelo);
        this.numeroPuertas = numeroPuertas;
    }

    detallesVehiculo(): void {
        console.log(`Automóvil: ${this.marca} ${this.modelo}, Puertas: ${this.numeroPuertas}`);
    }

    calcularCostoMantenimiento(): number {
        return 200; 
    }
}

class Moto extends Vehiculo implements Mantenimiento {
    private tipo: string;

    constructor(marca: string, modelo: string, tipo: string) {
        super(marca, modelo);
        this.tipo = tipo;
    }

    detallesVehiculo(): void {
        console.log(`Moto: ${this.marca} ${this.modelo}, Tipo: ${this.tipo}`);
    }

    calcularCostoMantenimiento(): number {
        return 100; 
    }
}

const vehiculo1 = new Automovil("Toyota", "Corolla", 4);
const vehiculo2 = new Moto("Yamaha", "MT-07", "Deportiva"); 
vehiculo1.detallesVehiculo();
console.log(`Costo de mantenimiento: $${vehiculo1.calcularCostoMantenimiento()}`);
vehiculo2.detallesVehiculo();       
console.log(`Costo de mantenimiento: $${vehiculo2.calcularCostoMantenimiento()}`);
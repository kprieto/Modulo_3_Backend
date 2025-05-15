/*Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución) 
Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y 
Moto. Cada clase debe sobrescribir el método arrancar de la clase base para 
proporcionar una implementación específica de cómo arrancar. */

export class Vehiculo {
    marca: string;
    modelo: string;
    
    constructor(marca: string,modelo: string){
        this.marca = marca;
        this.modelo = modelo
    }

    arrancar():string{
        return `El vehículo ${this.marca} ${this.modelo} está arrancando.`;  
    }
}

class Coche extends Vehiculo{
    constructor(marca:string, modelo: string){
        super(marca,modelo);
    }

    arrancar(): string{
        return `Girando la llave... El coche ${this.marca} ${this.modelo} ha arrancado con el motor encendido.`;
    }
}

class Moto extends Vehiculo {
    constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }

    
    arrancar(): string {
        return `Presionando el botón de encendido... La moto ${this.marca} ${this.modelo} ha arrancado con un sonido potente.`;
    }
}


const coche1 = new Coche("Toyota", "Corolla");
const moto1 = new Moto("Yamaha", "R1");

console.log(coche1.arrancar()); 
console.log(moto1.arrancar());
/*Ejercicio 5: Uso de Interfaces para Polimorfismo 
Crea una interfaz Empleado con un método trabajar. Implementa esta interfaz 
en clases Programador y Disenador, donde cada clase debe implementar el 
método con su propia lógica. Luego, crea una función que reciba un objeto de 
tipo Empleado y llame a su método trabajar. */

export interface Empleado {
    trabajar(): string;
}


class Programador implements Empleado {
    nombre:string;
    lenguaje:string;
    constructor(nombre: string, lenguaje: string) {
        this.nombre=nombre;
        this.lenguaje = lenguaje;
    }

    trabajar(): string {
        return `${this.nombre} está codificando en ${this.lenguaje}.`;
    }
}


class Disenador implements Empleado {
    nombre:string;
    herramienta:string;

    constructor(nombre: string,herramienta: string) {
        this.nombre = nombre;
        this.herramienta = herramienta;
    }

    trabajar(): string {
        return `${this.nombre} está diseñando con ${this.herramienta}.`;
    }
}


function procesarTrabajo(empleado: Empleado): void {
    console.log(empleado.trabajar());
}


const programador1 = new Programador("Karen", "TypeScript");
const disenador1 = new Disenador("Luis", "Adobe Photoshop");

procesarTrabajo(programador1);
procesarTrabajo(disenador1);
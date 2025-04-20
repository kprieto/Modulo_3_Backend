/*Ejercicio 4: Herencia de Métodos y Sobrescritura  
Consigna: Define una clase base Flor con el método describir(), que imprime un 
mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol, 
cada una sobrescribiendo el método describir() con un mensaje específico. */

class Flor {
    nombre: string;
    color: string;

    constructor(nombre: string, color: string) {
        this.nombre = nombre;
        this.color = color;
    }

    describir(): void {
        console.log(`Soy una flor de ${this.nombre} de color ${this.color}.`);
    }
}

class Rosa extends Flor {
    constructor(color: string) {
        super("Rosa", color);
    }

    describir(): void {
        console.log(`Soy una rosa de color ${this.color}, hermosa y fragante.`);
    }
}

class Girasol extends Flor {
    constructor(color: string) {
        super("Girasol", color);
    }

    describir(): void {
        console.log(`Soy un girasol de color ${this.color}, siempre mirando al sol.`);
    }
}

const rosa = new Rosa("rojo");
rosa.describir(); 

const girasol = new Girasol("Amarillo");
girasol.describir(); 
/*Ejercicio 6: Herencia Múltiple Simulada con Interfaces 
Crea dos interfaces, Volador y Nadador, con métodos volar y nadar, 
respectivamente. Implementa ambas interfaces en una clase Pato. Demuestra 
cómo una clase puede "heredar" múltiples comportamientos usando interfaces. */

interface Volador {
    volar():string;
}

interface Nadador{
    nadar():string;
}

class Pato implements Volador, Nadador {
    nombre:string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    volar(): string {
        return `El Pato ${this.nombre} está volando por el cielo.`;
    }

    nadar(): string {
        return `El Pato ${this.nombre} está nadando en el lago.`;
    }
}


const miPato = new Pato("Donald");

console.log(miPato.volar());
console.log(miPato.nadar());
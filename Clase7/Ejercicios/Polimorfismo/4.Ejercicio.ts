/*Ejercicio 4: Abstracción con Clases Abstractas 
Implementa una clase abstracta DispositivoElectronico con métodos abstractos 
encender y apagar. Crea dos clases concretas Televisor y Radio, que 
sobrescriban estos métodos. */

abstract class DispositivoElectronico {
    constructor(public marca: string, public modelo: string) {}

    abstract encender(): string;
    abstract apagar(): string;
}


class Televisor extends DispositivoElectronico {
    constructor(marca: string, modelo: string, public tamañoPantalla: number) {
        super(marca, modelo);
    }

    encender(): string {
        return `Encendiendo el televisor ${this.marca} ${this.modelo} con pantalla de ${this.tamañoPantalla}"... ¡Listo para ver tus programas favoritos!`;
    }

    apagar(): string {
        return `Apagando el televisor ${this.marca} ${this.modelo}... ¡Hasta la próxima!`;
    }
}


class Radio extends DispositivoElectronico {
    constructor(marca: string, modelo: string, public frecuencia: string) {
        super(marca, modelo);
    }

    encender(): string {
        return `Encendiendo la radio ${this.marca} ${this.modelo} en frecuencia ${this.frecuencia}... ¡Disfruta la música y las noticias!`;
    }

    apagar(): string {
        return `Apagando la radio ${this.marca} ${this.modelo}... ¡Silencio por ahora!`;
    }
}


const miTelevisor = new Televisor("Samsung", "QLED", 55);
const miRadio = new Radio("Sony", "XDR-S41", "FM 101.5");

console.log(miTelevisor.encender());
console.log(miTelevisor.apagar());

console.log(miRadio.encender());
console.log(miRadio.apagar());
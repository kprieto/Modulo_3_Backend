/*Ejercicio 8: Integramos contenidos - Animales 
1. Crea un pequeño sistema de gestión de Animales que incluya las clases 
Animal, Mascota, y MascotaExotica. 
o La clase Animal debe tener propiedades como nombre y tipo. 
o La clase Mascota debe extender Animal e incluir una propiedad para 
dueño. 
o La clase MascotaExotica debe extender Animal e incluir una 
propiedad para habitat. 
2. Implementa métodos para mostrar información sobre cada tipo de animal 
y agrega ejemplos de instanciación. */

export class Animal {
    public nombre: string;
    public tipo: string;

    constructor(nombre: string,tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;

    }

    mostrarInformacion(): string {
        return `Nombre: ${this.nombre}, Tipo: ${this.tipo}`;
    }
}


class Mascota extends Animal {
    public dueno: string;

    constructor(nombre: string, tipo: string, dueno: string) {
        super(nombre, tipo); 
        this.dueno = dueno;
    }

    
    mostrarInformacion(): string {
        return `${super.mostrarInformacion()}, Dueño: ${this.dueno}`;
    }
}


class MascotaExotica extends Animal {
    public habitat: string
    constructor(nombre: string, tipo: string, habitat: string) {
        super(nombre, tipo);
        this.habitat = habitat;
    }


    mostrarInformacion(): string {
        return `${super.mostrarInformacion()}, Hábitat: ${this.habitat}`;
    }
}

// Crear un objeto de la clase Animal
const leon = new Animal("León", "Salvaje");
console.log(leon.mostrarInformacion());

// Crear un objeto de la clase Mascota
const perro = new Mascota("Coco", "Doméstico", "Karen");
console.log(perro.mostrarInformacion());

// Crear un objeto de la clase MascotaExotica
const loro = new MascotaExotica("Loro", "Exótico", "Selva tropical");
console.log(loro.mostrarInformacion());
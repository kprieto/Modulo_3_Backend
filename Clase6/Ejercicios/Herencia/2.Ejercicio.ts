/*Ejercicio 2: Herencia Simple con Acceso 
Consigna: Crea una clase base Maestro con propiedades protegidas nombre y 
materia, y un método enseñar(). Luego, crea una clase derivada 
MaestroMatematicas que extienda de Maestro y sobrescriba el método 
enseñar() para imprimir un mensaje específico de matemáticas. */

class Maestro {
    nombre: string;
    materia: string;

    constructor(nombre: string, materia: string) {
        this.nombre = nombre;
        this.materia = materia;
    }

    enseñar(): void {
        console.log(`${this.nombre} está enseñando ${this.materia}.`);
    }
}


class MaestroMatematicas extends Maestro {
    constructor(nombre: string) {
        super(nombre, "Matemáticas");
    }

    enseñar(): void {
        console.log(`${this.nombre} está enseñando una clase de Matemáticas.`);
    }
}


const maestro1 = new Maestro("Carlos", "Historia");
maestro1.enseñar();

const maestroMatematicas = new MaestroMatematicas("Ana");
maestroMatematicas.enseñar();
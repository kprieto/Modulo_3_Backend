/*Ejercicio 4: Clases y Objetos 
1. Define una clase llamada Animal con propiedades nombre y tipo, y un 
método hacerSonido(). 
2. Crea una instancia de la clase Animal y llama al método. */
export class Animal {
    public nombre: string;
    public tipo: string;

    constructor (nombre: string, tipo:string ){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    public hacerSonido(sonido: string): string{
        return `${this.nombre} de tipo ${this.tipo} hace el sonido ${sonido}.`
    }
}

const animal1 = new Animal('Coco', 'Gato');
let sonido = animal1.hacerSonido("Miau");
console.log(sonido);

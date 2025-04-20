/*Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases  
Crea un sistema de inventario que gestione diferentes tipos de productos. 
Define una clase abstracta Producto con: 
• Propiedades protegidas: nombre, precio. 
• Un método abstracto calcularDescuento(). 
Implementa dos subclases: Ropa y Electronica. 
• La subclase Ropa aplicará un 10% de descuento. 
• La subclase Electronica tendrá un 5% de descuento. 
Añade un método concreto en la clase abstracta para mostrar la información del 
producto. */

abstract class Producto {
    protected nombre: string;
    protected precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    abstract calcularDescuento(): number;

    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
        console.log(`Descuento: $${this.calcularDescuento()}`);
        console.log(`Precio final: $${this.precio - this.calcularDescuento()}`);
    }
}   

class Ropa extends Producto {
    constructor(nombre: string, precio: number) {
        super(nombre, precio);
    }

    calcularDescuento(): number {
        return this.precio * 0.10; 
    }
}
class Electronica extends Producto {
    constructor(nombre: string, precio: number) {
        super(nombre, precio);
    }

    calcularDescuento(): number {
        return this.precio * 0.05; 
    }
}
const ropa = new Ropa("Camisa", 584);
ropa.mostrarInformacion(); 
console.log("-----------------");

const electronica = new Electronica("Teléfono", 3000);
electronica.mostrarInformacion();
// const producto = new Producto("Producto", 100); // Error
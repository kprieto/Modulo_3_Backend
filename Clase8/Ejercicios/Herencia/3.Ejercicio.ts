/*Ejercicio 9: Sistema de Tienda en Línea 
Consigna: Desarrolla un sistema para una tienda en línea. Crea una clase base 
Producto que tenga propiedades como nombre, precio, y un método 
detallesProducto(). Luego, crea dos clases derivadas: Electronico y Ropa, ambas 
deben sobrescribir el método detallesProducto() con información más 
específica. 
Crea una interfaz Envio que defina el método calcularEnvio(). La clase 
Electronico debe implementar esta interfaz y el cálculo del envío será un 10% 
del precio del producto. */

interface Envio {
    calcularEnvio(): number;
}

export class Producto {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    detallesProducto(): void {
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
    }
}

class Electronico extends Producto implements Envio {
    marca: string;

    constructor(nombre: string, precio: number, marca: string) {
        super(nombre, precio);
        this.marca = marca;
    }

    detallesProducto(): void {
        console.log(`Producto Electrónico: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio}`);
    }

    calcularEnvio(): number {
        return this.precio * 0.10; // 10% del precio
    }
}

class Ropa extends Producto {
    talla: string;

    constructor(nombre: string, precio: number, talla: string) {
        super(nombre, precio);
        this.talla = talla;
    }

    detallesProducto(): void {
        console.log(`Producto de Ropa: ${this.nombre}, Talla: ${this.talla}, Precio: $${this.precio}`);
    }
}

const producto1 = new Electronico("Laptop", 1200, "Dell");      
const producto2 = new Ropa("Camisa", 30, "M");
producto1.detallesProducto();
console.log(`Costo de envío: $${producto1.calcularEnvio()}`);
producto2.detallesProducto();

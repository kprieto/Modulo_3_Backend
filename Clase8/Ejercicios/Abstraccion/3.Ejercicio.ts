/*Ejercicio 9: Sistema de Gestión de Compras 
Crea un sistema que gestione productos y órdenes de compra. Usa una clase 
abstracta Producto, clases concretas Electrónico y Alimento, y una clase 
OrdenCompra que contenga múltiples productos. */

export abstract class Producto {       
    nombre: string;
    precio: number;
    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }
    abstract mostrarInformacion(): void; 
}

class Electronico extends Producto {
    marca: string;
    constructor(nombre: string, precio: number, marca: string) {
        super(nombre, precio); 
        this.marca = marca;
    }
    mostrarInformacion(): void { 
        console.log(`Producto Electrónico: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio}`);
    }
}
class Alimento extends Producto {
    fechaCaducidad: Date;
    constructor(nombre: string, precio: number, fechaCaducidad: Date) {
        super(nombre, precio); 
        this.fechaCaducidad = fechaCaducidad;
    }
    mostrarInformacion(): void { 
        console.log(`Producto Alimenticio: ${this.nombre}, Fecha de Caducidad: ${this.fechaCaducidad.toLocaleDateString()}, Precio: $${this.precio}`);
    }
}
class OrdenCompra {
    productos: Producto[] = []; 
    agregarProducto(producto: Producto): void { 
        this.productos.push(producto);
    }
    mostrarOrden(): void { 
        console.log("Orden de Compra:");
        this.productos.forEach(prod => prod.mostrarInformacion()); 
    }
}
// Ejemplo de uso   
const producto1 = new Electronico("Laptop", 1200, "Dell");
const producto2 = new Alimento("Leche", 2, new Date("2023-12-31"));
const orden = new OrdenCompra();
orden.agregarProducto(producto1); 
orden.agregarProducto(producto2);
orden.mostrarOrden(); 

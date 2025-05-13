/*Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza 
Crea un sistema de gestión de productos en una tienda de belleza. Define una 
clase Producto con atributos como nombre, precio y categoria. Luego, crea una 
clase Inventario que gestione un conjunto de productos y tenga métodos para 
agregar, eliminar y buscar productos por categoría. Usa polimorfismo para 
manejar diferentes tipos de productos, como Cosmetico, TratamientoCapilar, 
etc. */

export class Producto {
    constructor(public nombre: string, public precio: number, public categoria: string) {}


    mostrarInformacion(): string {
        return `Nombre: ${this.nombre}, Precio: $${this.precio.toFixed(2)}, Categoría: ${this.categoria}`;
    }
}


class Cosmetico extends Producto {
    constructor(nombre: string, precio: number, public tipoCosmetico: string) {
        super(nombre, precio, "Cosmético");
    }


    mostrarInformacion(): string {
        return `${super.mostrarInformacion()}, Tipo: ${this.tipoCosmetico}`;
    }
}

    
class TratamientoCapilar extends Producto {
    constructor(nombre: string, precio: number, public efecto: string) {
        super(nombre, precio, "Tratamiento Capilar");
    }


    mostrarInformacion(): string {
        return `${super.mostrarInformacion()}, Efecto: ${this.efecto}`;
    }
}

    // Clase Inventario para gestionar productos
class Inventario {
    private productos: Producto[] = [];


    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
        console.log(`Producto agregado: ${producto.nombre}`);
    }

    eliminarProducto(nombre: string): void {
        const index = this.productos.findIndex(p => p.nombre === nombre);
        if (index !== -1) {
        this.productos.splice(index, 1);
        console.log(`Producto eliminado: ${nombre}`);
        } else {
        console.log(`Producto no encontrado: ${nombre}`);
        }
    }


    buscarPorCategoria(categoria: string): Producto[] {
        return this.productos.filter(p => p.categoria === categoria);
    }


    mostrarInventario(): void {
        console.log("Inventario de productos:");
        this.productos.forEach(producto => console.log(producto.mostrarInformacion()));
    }
}


const inventario = new Inventario();


inventario.agregarProducto(new Cosmetico("Labial Rojo", 15.99, "Maquillaje"));
inventario.agregarProducto(new Cosmetico("Base de Maquillaje", 22.99, "Maquillaje"));
inventario.agregarProducto(new TratamientoCapilar("Shampoo Nutritivo", 10.99, "Hidratación"));
inventario.agregarProducto(new TratamientoCapilar("Acondicionador Fortificante", 12.99, "Reparación"));


inventario.mostrarInventario();


console.log("Productos de Tratamiento Capilar:");
inventario.buscarPorCategoria("Tratamiento Capilar").forEach(p => console.log(p.mostrarInformacion()));


inventario.eliminarProducto("Labial Rojo");


inventario.mostrarInventario();

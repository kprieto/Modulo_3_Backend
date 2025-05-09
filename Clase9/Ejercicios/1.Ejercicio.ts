/*1. Mueblería: Actualización de Precios 
En una mueblería, se requiere un sistema que permita actualizar los precios de 
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y 
un identificador único. Implementa las siguientes funciones: 
• Añadir un nuevo mueble. 
• Actualizar el precio de un mueble después de 3 segundos utilizando 
setTimeout(). 
• Mostrar el inventario de muebles. */

class Mueble {
    nombre: string;
    precio: number;
    id: number;

    constructor(nombre: string, precio: number, id: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }

}

class Muebleria {
    private muebles: Mueble[] = [];

    public agregarMueble(nombre: string, precio: number, id: number): void {
        const nuevoMueble = new Mueble(nombre, precio, id);
        this.muebles.push(nuevoMueble);
        console.log(`Mueble ${nombre} agregado con éxito.`);
    }

    public actualizarPrecio(id: number, nuevoPrecio: number): void {
        const mueble = this.muebles.find(m => m.id === id);
        if (mueble) {  
            if(nuevoPrecio > 0){         
            setTimeout(() => {                
                mueble.precio = nuevoPrecio;
                console.log(`El precio del mueble ${mueble.nombre} ha sido actualizado a ${nuevoPrecio}.`);
                this.mostrarInventario();
        }, 3000);
            }
            else{
                console.log("El precio no puede ser menor o igual a 0.");
            }
        } else {
            console.log(`No se encontró el mueble con ID ${id}.`);
        }
    }

    public mostrarInventario(): void {
        console.log("Inventario de muebles:");
        this.muebles.forEach(m => {
            console.log(`ID: ${m.id}, Nombre: ${m.nombre}, Precio: ${m.precio}`);
        });
    }
}

const muebleria = new Muebleria();
muebleria.agregarMueble("Sofá", 500, 1);
muebleria.agregarMueble("Mesa", 200, 2);    
muebleria.agregarMueble("Silla", 100, 3);
muebleria.mostrarInventario();  
muebleria.actualizarPrecio(2, 250); 
muebleria.actualizarPrecio(4, 250);





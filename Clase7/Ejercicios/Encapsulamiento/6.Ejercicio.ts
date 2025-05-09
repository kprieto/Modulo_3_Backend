/*6. Ejercicio de Supermercado 
Crea una clase Producto que contenga propiedades privadas como nombre, 
precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea 
negativo y que cantidad no sea menor que 0. */

export class Producto{
    private _nombre: string;
    private _precio!: number; 
    private _cantidad!: number; 

    constructor(nombre: string, precio: number, cantidad: number) {
        this._nombre = nombre;
        this.precio = precio; 
        this.cantidad = cantidad; 
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get precio(): number {
        return this._precio;
    }

    public set precio(value: number) {
        if (value < 0) {
            console.log("El precio no puede ser negativo.");
        } else {
            this._precio = value;
        }
    }

    public get cantidad(): number {
        return this._cantidad;
    }

    public set cantidad(value: number) {
        if (value < 0) {
            console.log("La cantidad no puede ser menor que 0.");
        } else {
            this._cantidad = value;
        }
    }
}
const producto1 = new Producto("Manzana", 1.5, 10);
console.log(producto1.nombre);  
console.log(producto1.precio);
console.log(producto1.cantidad);
producto1.precio = -2;
producto1.cantidad = -5;


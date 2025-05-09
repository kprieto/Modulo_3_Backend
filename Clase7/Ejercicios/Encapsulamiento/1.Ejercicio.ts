/*1. Ejercicio de Coche 
Diseña una clase Coche que represente un vehículo. Esta clase debe tener 
propiedades privadas para marca, modelo, año, y kilometraje. Implementa 
métodos para encender el coche y realizar un viaje, que incrementen el 
kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se 
inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta 
establecer un año o kilometraje no válido, imprime un mensaje indicando el 
error. */

export class Coche {
    private _marca: string;
    private _modelo: string;
    private _anio: number;
    private _kilometraje: number;

    constructor(marca: string, modelo: string, anio: number, kilometraje: number = 0) {
        this._marca = marca;
        this._modelo = modelo;
        this._anio = anio;
        this._kilometraje =kilometraje; 
    }

    public set anio(value:number){
        if (value >= 1886) {
            this._anio = value;
        } else {
            console.log("El año no puede ser menor que 1886.");
        }
    }

    public set kilometraje(value:number){
        if (value >= 0) { 
                
                this._kilometraje = value;
            } else {
                console.log("El kilometraje no puede ser negativo.");
            }
    }
    public encender(): void {
        console.log(`El coche ${this._marca} ${this._modelo} está encendido.`);
    }

    public realizarViaje(): void {
        this._kilometraje += 10;
        console.log(`Realizando un viaje en el coche ${this._marca} ${this._modelo} a ${this._kilometraje} km`);
    }


}

const coche1 = new Coche("Toyota", "Corolla", 2020,159);
coche1.anio=2023
coche1.kilometraje = 100; 
coche1.encender();  
coche1.realizarViaje(); 



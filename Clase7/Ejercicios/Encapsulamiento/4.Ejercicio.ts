/*4. Ejercicio de Aviones 
Crea una clase Avion con propiedades privadas para el modelo, capacidad y 
velocidad. Implementa getters y setters para cada propiedad, asegurándote de 
validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa. 
Nota sobre la inicialización de propiedades 
En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las 
propiedades _capacidad y _velocidad. Esto se hace para evitar un error de 
TypeScript que indica que estas propiedades no estaban inicializadas en el 
constructor. Este enfoque asegura que las propiedades serán asignadas 
adecuadamente en el constructor mediante el uso de los setters, manteniendo 
así la validación de los valores. Tener esto en cuenta para los demás ejercicios. */

export class Avion {
    private _modelo: string;
    private _capacidad!: number; 
    private _velocidad!: number; 

    constructor(modelo: string, capacidad: number, velocidad: number) {
        this._modelo = modelo;
        this.capacidad = capacidad; 
        this.velocidad = velocidad; 
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(value: string) {
        this._modelo = value;
    }

    public get capacidad(): number {
        return this._capacidad;
    }

    public set capacidad(value: number) {
        if (value < 0) {
            console.log("La capacidad no puede ser menor que 0.");
        }else{
            this._capacidad = value;
        }
        
    }

    public get velocidad(): number {
        return this._velocidad;
    }

    public set velocidad(value: number) {
        if (value < 0) {
            console.log("La velocidad no puede ser negativa.");
        } else {
            this._velocidad = value;

        }
    }
}

const avion1 = new Avion("Boeing 747", 400, 900);
console.log(avion1.modelo); 
console.log(avion1.capacidad); 
console.log(avion1.velocidad); 

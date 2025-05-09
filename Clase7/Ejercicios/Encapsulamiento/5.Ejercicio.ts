/*5. Ejercicio de Vacaciones 
Desarrolla una clase Vacacion que tenga propiedades privadas para destino, 
duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de 
que duracion no sea menor que 1 y presupuesto sea mayor que 0.*/

class Vacacion{
    private _destino: string;
    private _duracion!: number; 
    private _presupuesto!: number; 

    constructor(destino: string, duracion: number, presupuesto: number) {
        this._destino = destino;
        this.duracion = duracion; 
        this.presupuesto = presupuesto; 
    }

    public get destino(): string {
        return this._destino;
    }

    public set destino(value: string) {
        this._destino = value;
    }

    public get duracion(): number {
        return this._duracion;
    }

    public set duracion(value: number) {
        if (value < 1) {
            console.log("La duración no puede ser menor que 1 día.");
        } else {
            this._duracion = value;
        }
    }

    public get presupuesto(): number {
        return this._presupuesto;
    }

    public set presupuesto(value: number) {
        if (value <= 0) {
            console.log("El presupuesto debe ser mayor que 0.");
        } else {
            this._presupuesto = value;
        }
    }
}

const vacacion1 = new Vacacion("Cancún", 7, 1500);
console.log(vacacion1.destino);
console.log(vacacion1.duracion);
console.log(vacacion1.presupuesto);
vacacion1.duracion = 0; 
vacacion1.presupuesto = -500; 
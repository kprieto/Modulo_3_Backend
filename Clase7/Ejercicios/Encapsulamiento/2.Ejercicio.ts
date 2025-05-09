/*2. Ejercicio de Libro 
Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe 
tener propiedades privadas para titulo, autor, anioPublicacion, y disponible. 
Implementa métodos para prestar y devolver el libro, asegurando que solo se 
pueda prestar si está disponible y que se pueda devolver solo si ha sido 
prestado. Imprime un mensaje en caso de que se intente realizar una acción no 
válida. */

class Libro {
    private _titulo: string;
    private _autor: string;
    private _anioPublicacion: number;
    private _disponible: boolean;

    constructor(titulo: string, autor: string, anioPublicacion: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._anioPublicacion = anioPublicacion;
        this._disponible = true; 
    }

    public prestar(): void {
        if (this._disponible) {
            this._disponible = false;
            console.log(`El libro "${this._titulo}" ha sido prestado.`);
        } else {
            console.log(`El libro "${this._titulo}" no está disponible para prestar.`);
        }
    }

    public devolver(): void {
        if (!this._disponible) {
            this._disponible = true;
            console.log(`El libro "${this._titulo}" ha sido devuelto.`);
        } else {
            console.log(`El libro "${this._titulo}" no ha sido prestado y no se puede devolver.`);
        }
    }
}

const libro1 = new Libro("El Quijote", "Miguel de Cervantes", 1605);
libro1.prestar();
libro1.devolver();
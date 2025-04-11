// Definimos una clase
class Gato {
    // Propiedades
    public nombre: string;
    public edad: number;
    private raza: string;

    // constructor
    constructor(nombre:string, edad:number,raza:string){
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    //metodo para obtener info del gatito
    public obtenerInformacion(): string{
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`
    }

    // metodo para cambiar la raza del gatito
    public cambiarRaza(nuevaRaza: string): void {
        this.raza = nuevaRaza;
    }
}

// Creamos una instancia de la clase Gato
const gato1 = new Gato('Miau', 2 , "Siames")

// llamamos al metodo obtener informacion
console.log(gato1.obtenerInformacion());

// cambiamos la raza
gato1.cambiarRaza("Persa");
console.log(gato1.obtenerInformacion());

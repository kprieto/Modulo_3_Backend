/*Ejercicio 6: Uso de this 
1. Crea una clase llamada Mariposa con propiedades nombre y color, y un 
método volar() que use this para referirse a las propiedades de la 
instancia. 
2. Crea una instancia de la clase y llama al método. */

class Mariposa{
    public nombre: string;
    public color: string;

    constructor (nombre:string, color:string){
        this.nombre = nombre;
        this.color = color;
    }

    public volar(vuelo:boolean): string{
        return `Nombre: ${this.nombre}, Color: ${this.color}, Vuelo: ${vuelo===true?"Sí": "No"}`
    }
}
const mariposa1 = new Mariposa('Monarca', "cafe y negro");
let descripcion = mariposa1.volar(true);
console.log(descripcion);


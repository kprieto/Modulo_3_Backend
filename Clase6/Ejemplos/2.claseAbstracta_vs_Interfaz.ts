//Ejemplo practico:
// imaginemos un sistema de gestion de transporte donde queremos definir vehiculos que se mueven
// de diferente maneras
//usaremos una clase abstracta "vehiculo" para definir el comportamiento general de todos los
// vehiculos y creamos una interfaz "electrico" para los vehiculos que ´pueden cargarse electronicamente

// Interfaz para vehiculos electricos
interface Electricos {
    cargarBateria():void;


}

//Clase abstracta para todos los vehiculos
abstract class Vehiculo{
    constructor(protected tipo: string){

    }

    //Metodo abstracto
    abstract moverse():void;
    // metodo concreto
    describir():void{
        console.log(`Este es un vehiculo tipo ${this.tipo}`);
        
    }
}

//Clase concreta que extiende de la clase abstracta e implementa una interfaz
class AutoElectrico extends Vehiculo implements Electricos{
    constructor(){
        super("Auto electrico")
    }

    moverse(): void {
        console.log("El auto se mueve sileciosamente...");
        
    }

    cargarBateria():void{
        console.log("cargando la bateria del auto...");
        
    }
}

const tesla = new AutoElectrico();
tesla.moverse();
tesla.cargarBateria();
tesla.describir();

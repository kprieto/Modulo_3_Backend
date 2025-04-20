// Clase base
export class Animal {
    name: string
    // Constructor: inicializa la propiedad name
    constructor(name: string){
        this.name = name
    }

    // metodo que imprime un sonido generico de animal
    makeSound(): void{
        console.log(`${this.name} hace un sonido`);
        
    }
}

// Clase derivada- clase Hija
class Dog extends Animal {
    bread: string;
    
    constructor(name: string, bread: string){
        super(name); // Llama al constructor de la clase base animal para inicializar 'name'
        this.bread = bread; // inicializamos la prop bread

    }

    //sobreescritura del metodo makesound
    makeSound(): void {
        console.log(`${this.name} ladra`); //cambia el sonido especifico para los perros
        
    }

    //nuevo metodo especifico de la subclase dog
    fetch(): void{
        console.log(`${this.name} esta buscando la pelota.`); // el perro realizar la acccion de buscar la pelota
        
    }
}

//Instanciar objetos de la clase base y derivada
const animalGenerico = new Animal('Animal') // Creacion de un objeto de la clase base
animalGenerico.makeSound();

const myDog = new Dog("Blaki", "Caniche");
myDog.makeSound();
myDog.fetch();
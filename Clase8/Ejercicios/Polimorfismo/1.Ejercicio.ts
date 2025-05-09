/*Ejercicio 7: Herencia y Polimorfismo con Clases Abstractas y Métodos 
Sobrecargados 
Crea una clase abstracta InstrumentoMusical con un método tocar. Crea dos 
clases derivadas Guitarra y Piano, que sobrescriban este método para tocar el 
instrumento de manera diferente. Además, agrega una sobrecarga del método 
tocar en la clase base para permitir tocar con o sin acompañamiento. */

abstract class InstrumentoMusical{
    //Metodo abstracto
    abstract tocar():void;
    abstract tocar(conAcompaniamiento: boolean): void;
}

class Guitarra extends InstrumentoMusical{
    //sobrescritura del metodo tocar
    tocar(): void;
    tocar(conAcompaniamiento: boolean): void;
    tocar(conAcompaniamiento?: boolean): void{
        if(conAcompaniamiento){
            console.log('Tocando la guitarra con acompaniamiento.');

            
        }else{
            console.log('Tocando la guitarra sin acompaniamiento.');

        }
    }
}

class Piano extends InstrumentoMusical{
    //sobrescritura del metodo tocar
    tocar(): void;
    tocar(conAcompaniamiento: boolean): void;
    tocar(conAcompaniamiento?: boolean): void{
        if(conAcompaniamiento){
            console.log('Tocando el piano con acompaniamiento.');

            
        }else{
            console.log('Tocando el piano sin acompaniamiento.');

        }
    }
}

const guitarra = new Guitarra();
guitarra.tocar() //Tocando la guitarra sin acompaniamiento
guitarra.tocar(true) //Tocando la guitarra con acompanimiento


const piano = new Piano();
piano.tocar() //Tocando el piano sin acompaniamiento
piano.tocar(true) //Tocando el piano con acompanimiento
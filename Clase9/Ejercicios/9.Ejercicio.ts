/*Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo 
Crea un sistema que represente el juego Pac-Man utilizando clases. Define una 
clase Personaje que sirva como clase base para PacMan y Fantasma. Implementa 
métodos para moverse por el mapa y realizar acciones. Define una interfaz 
EntidadMovible que contenga el método moverse. Usa herencia para que Pac
Man y los fantasmas compartan el comportamiento de moverse y polimorfismo 
para que cada personaje pueda implementar su propio comportamiento de 
movimiento. */

interface EntidadMovible {
    moverse(direccion: string): void;
}
class Personaje implements EntidadMovible {
    protected nombre: string;
    protected posicion: { x: number; y: number };

    constructor(nombre: string, x: number, y: number) {
        this.nombre = nombre;
        this.posicion = { x, y };
    }

    moverse(direccion: string): void {
        switch (direccion) {
            case "arriba":
                this.posicion.y += 1;
                break;
            case "abajo":
                this.posicion.y -= 1;
                break;
            case "izquierda":
                this.posicion.x -= 1;
                break;
            case "derecha":
                this.posicion.x += 1;
                break;
            default:
                console.log("Dirección no válida.");
        }
        console.log(`${this.nombre} se ha movido a (${this.posicion.x}, ${this.posicion.y}).`);
    }
    mostrarPosicion(): void {
        console.log(`${this.nombre} está en la posición (${this.posicion.x}, ${this.posicion.y}).`);
    }
}
class PacMan extends Personaje {
    constructor(x: number, y: number) {
        super("Pac-Man", x, y);
    }
    moverse(direccion: string): void {
        super.moverse(direccion);   
        console.log(`${this.nombre} ha comido una pastilla.`);
    }
}
class Fantasma extends Personaje {
    constructor(nombre: string, x: number, y: number) {
        super(nombre, x, y);
    }
    moverse(direccion: string): void {
        super.moverse(direccion);
        console.log(`${this.nombre} se ha movido sigilosamente.`);
    }
}
const pacman = new PacMan(0, 0);
const fantasma1 = new Fantasma("Blinky", 5, 5);
const fantasma2 = new Fantasma("Pinky", 3, 3);
pacman.moverse("arriba");
pacman.moverse("derecha");
pacman.mostrarPosicion();
fantasma1.moverse("izquierda");
fantasma1.mostrarPosicion();
fantasma2.moverse("abajo");
fantasma2.mostrarPosicion();

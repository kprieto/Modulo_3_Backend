/*Ejercicio 10: Sistema de Gestión de Biblioteca 
Crea un sistema para gestionar libros y miembros de una biblioteca. Usa una 
clase abstracta Publicacion, clases concretas Libro y Revista, y una clase 
Biblioteca que gestione el préstamo de publicaciones.*/

abstract class Publicacion{
    titulo: string;
    autor: string;
    anioPublicacion: number;

    constructor(titulo: string, autor: string, anioPublicacion: number){
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }

    abstract mostrarInformacion(): void;


}

export class Libro extends Publicacion{
    genero: string;

    constructor(titulo: string, autor: string, anioPublicacion: number, genero: string){
        super(titulo, autor, anioPublicacion);
        this.genero = genero;
    }

    mostrarInformacion(): void {
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anioPublicacion}, Género: ${this.genero}`);
    }
}

class Revista extends Publicacion{
    numero: number;

    constructor(titulo: string, autor: string, anioPublicacion: number, numero: number){
        super(titulo, autor, anioPublicacion);
        this.numero = numero;
    }

    mostrarInformacion(): void {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anioPublicacion}, Número: ${this.numero}`);
    }
}   

class Biblioteca{
    miembros: string[] = [];
    publicaciones: Publicacion[] = [];

    agregarPublicacion(publicacion: Publicacion): void {
        this.publicaciones.push(publicacion);
    }
    agregarMiembro(nombre: string): void {
        this.miembros.push(nombre);
    }
    prestarPublicacion(titulo: string): void {
        const publicacion = this.publicaciones.find(pub => pub.titulo === titulo);
        if (publicacion) {
            console.log(`Prestando ${titulo}`);
            this.publicaciones = this.publicaciones.filter(pub => pub.titulo !== titulo);
        } else {
            console.log(`La publicación ${titulo} no está disponible.`);
        }
    }
    devolverPublicacion(publicacion: Publicacion): void {
        this.publicaciones.push(publicacion);
        console.log(`Devolviendo ${publicacion.titulo}`);
    }
    mostrarMiembros(): void {
        console.log("Miembros de la biblioteca:");
        this.miembros.forEach(miembro => console.log(miembro));
    }


    mostrarPublicaciones(): void {
        console.log("Publicaciones en la biblioteca:");
        this.publicaciones.forEach(pub => pub.mostrarInformacion());
    }
}   

const biblioteca = new Biblioteca();    
const libro1 = new Libro("El Quijote", "Miguel de Cervantes", 1605, "Novela");
const libro2 = new Libro("Cien años de soledad", "Gabriel Garcia Marquez", 1965, "Novela"); 
const revista1 = new Revista("National Geographic", "Varios", 2023, 1);
const revista2 = new Revista("TIME", "Varios", 2023, 2);
biblioteca.agregarPublicacion(libro1);
biblioteca.agregarPublicacion(libro2);
biblioteca.agregarPublicacion(revista1);
biblioteca.agregarPublicacion(revista2);
biblioteca.agregarMiembro("Juan Pérez");
biblioteca.agregarMiembro("Ana Gómez");
biblioteca.mostrarMiembros();
biblioteca.mostrarPublicaciones();
console.log("-----Prestando El Quijote---");
biblioteca.prestarPublicacion("El Quijote");
biblioteca.mostrarPublicaciones();
console.log("-----Devolviendo El Quijote---");
biblioteca.devolverPublicacion(libro1);
biblioteca.mostrarPublicaciones();
console.log("-----Prestando TIME---");
biblioteca.prestarPublicacion("TIME");
biblioteca.mostrarPublicaciones();
console.log("-----Devolviendo TIME---");
biblioteca.devolverPublicacion(revista2);
biblioteca.mostrarPublicaciones();


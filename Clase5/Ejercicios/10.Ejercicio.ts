/*Ejercicio 10: Registro de Estudiantes 
1. Crea un sistema para registrar Estudiantes con las siguientes clases: 
o Estudiante: Clase que incluye propiedades como nombre, edad y 
curso, además de un método que muestre la información del 
estudiante. 
o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con 
métodos para agregar un estudiante y mostrar todos los estudiantes 
registrados. */

class Estudiante {
    public nombre: string;
    public edad: number;
    public curso: string;

    constructor(nombre:string, edad:number, curso: string){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    mostrarEstudiante(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`;
    }
}

// Clase RegistroEstudiantes
class RegistroEstudiantes {

    public listaEstudiantes: Estudiante[] = [];


    agregarEstudiante(estudiante: Estudiante): void {
        this.listaEstudiantes.push(estudiante);
        console.log(`Estudiante ${estudiante.nombre} agregado exitosamente.`);
    }
    

    mostrarEstudiantes(): void {
        console.log("Lista de estudiantes registrados:");
        if (this.listaEstudiantes.length === 0) {
            console.log("No hay estudiantes registrados.");
        } else {
            this.listaEstudiantes.forEach((estudiante, index) => {
            console.log(`${index + 1}. ${estudiante.mostrarEstudiante()}`);
            });
        }
    }
}

// Crear una instancia de RegistroEstudiantes
const registro = new RegistroEstudiantes();

// Crear instancias de Estudiante
export const estudiante1 = new Estudiante("Karen", 20, "Matemáticas");
const estudiante2 = new Estudiante("Luis", 22, "Historia");
const estudiante3 = new Estudiante("Ana", 19, "Programación");

// Agregar estudiantes al registro
registro.agregarEstudiante(estudiante1);
registro.agregarEstudiante(estudiante2);
registro.agregarEstudiante(estudiante3);

// Mostrar todos los estudiantes registrados
registro.mostrarEstudiantes();
/*Ejercicio 8: Sistema de Gestión de Cursos 
Crea un sistema que gestione cursos, profesores y estudiantes. Usa una clase 
abstracta Persona, clases concretas Estudiante y Profesor, y una clase Curso que 
contenga los estudiantes y el profesor. */

abstract class Persona {  
    nombre:string;
    edad: number  
    constructor(nombre: string, edad: number) {
        this.nombre = nombre; 
        this.edad = edad;
    }
    abstract presentarse(): void; 
}
class Estudiante extends Persona {   
    private curso: string;   
    constructor(nombre: string, edad: number, curso: string) {
        super(nombre, edad); 
        this.curso = curso;
    }
    presentarse(): void { 
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y estoy en el curso de ${this.curso}.`);
    }
}
class Profesor extends Persona {
    private materia:string;
    constructor(nombre: string, edad: number, materia: string) {
        super(nombre, edad); 
        this.materia = materia;
    }
    presentarse(): void { 
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y enseño ${this.materia}.`);
    }
}
class Curso {   
    private estudiantes: Estudiante[] = [];
    private profesor:Profesor;
    private nombreCurso:string;
    constructor(profesor: Profesor, nombreCurso: string) {
        this.profesor = profesor;
        this.nombreCurso = nombreCurso;
    }
    agregarEstudiante(estudiante: Estudiante): void { 
        this.estudiantes.push(estudiante);
    }
    mostrarInformacion(): void { 
        console.log(`Curso: ${this.nombreCurso}`);
        console.log(`Profesor: ${this.profesor.nombre}`);

        console.log("Estudiantes:");
        this.estudiantes.forEach(est => est.presentarse()); 
    }
}

// Ejemplo de uso
const profesor = new Profesor("Juan", 35, "JavaScript");
profesor.presentarse(); 
export const estudiante1 = new Estudiante("Ana", 20, "JavaScript");
const estudiante2 = new Estudiante("Luis", 22, "JavaScript");
const curso = new Curso(profesor, "JavaScript Avanzado");
curso.agregarEstudiante(estudiante1);   
curso.agregarEstudiante(estudiante2);
curso.mostrarInformacion();
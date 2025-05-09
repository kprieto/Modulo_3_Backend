/*Ejercicio 8: Polimorfismo y Herencia con Abstracción Compleja 
Implementa una clase abstracta Empleado con un método abstracto 
calcularSalario. Crea dos clases derivadas EmpleadoPorHora y EmpleadoFijo, 
que calculen el salario de acuerdo a las horas trabajadas y salario fijo 
respectivamente. */

export abstract class Empleado {
    protected nombre: string;
    protected salario: number;

    constructor(nombre: string, salario: number) {
        this.nombre = nombre;
        this.salario = salario;
    }

    abstract calcularSalario(): number;
}

class EmpleadoPorHora extends Empleado {
    private horasTrabajadas: number;
    private tarifaPorHora: number;

    constructor(nombre: string, salario: number, horasTrabajadas: number, tarifaPorHora: number) {
        super(nombre, salario);
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }

    calcularSalario(): number {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}

class EmpleadoFijo extends Empleado {
    calcularSalario(): number {
        return this.salario;
    }
}

const empleado1 = new EmpleadoPorHora("Juan", 0, 40, 15); 
const empleado2 = new EmpleadoFijo("Maria", 3000); 
console.log(`Salario de ${empleado1["nombre"]}: $${empleado1.calcularSalario()}`);  
console.log(`Salario de ${empleado2["nombre"]}: $${empleado2.calcularSalario()}`); 

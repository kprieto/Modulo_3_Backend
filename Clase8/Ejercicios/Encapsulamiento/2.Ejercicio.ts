/*8. Ejercicio de Empleado 
Crea una clase Empleado que contenga propiedades privadas para nombre, 
salario, y departamento. Implementa métodos para cambiar el salario (que no 
puede ser menor a 0) y obtener la información del empleado. Si se intenta 
establecer un salario negativo, imprime un mensaje indicativo. */

export class Empleado {
    private nombre: String;
    private salario: number;
    private departamento: String;

    constructor(nombre: String, salario: number, departamento: String) {
        this.nombre = nombre;
        this.salario = salario;
        this.departamento = departamento;
    }

    public set cambiarSalario(nuevoSalario: number) {
        if (nuevoSalario < 0) {
            console.log("El salario no puede ser menor a 0.");
        } else {
            this.salario = nuevoSalario;
            console.log(`El salario de ${this.nombre} ha sido cambiado a ${this.salario}.`);
        }
    }
}

const empleado1 = new Empleado("Juan", 50000, "Ventas");
empleado1.cambiarSalario = 60000; 
empleado1.cambiarSalario = -1000;
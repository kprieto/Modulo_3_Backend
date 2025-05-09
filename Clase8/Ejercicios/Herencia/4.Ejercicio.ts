/*Ejercicio 10: Sistema de Gestión de Empleados 
Consigna: Crea una clase base Empleado con propiedades protegidas nombre y 
salario, y un método calcularSalario(). Crea dos clases derivadas 
EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Ambas clases deben 
sobrescribir el método calcularSalario() con sus propias lógicas (empleados de 
tiempo completo tienen un salario fijo, mientras que los empleados de medio 
tiempo cobran por hora). 
Además, crea una interfaz BeneficiosLaborales que tenga el método 
calcularBeneficios(). Solo los empleados de tiempo completo implementarán 
esta interfaz.*/

interface BeneficiosLaborales {
    calcularBeneficios(): number;
}

class Empleado {
    protected nombreC: string;
    protected salarioF: number;

    constructor(nombreC: string, salarioF: number) {
        this.nombreC = nombreC;
        this.salarioF = salarioF;
    }

    public obtenerNombre(): string {
        return this.nombreC;  
    }

    calcularSalario(): number {
        return this.salarioF;
    }
}

class EmpleadoTiempoCompleto extends Empleado implements BeneficiosLaborales {
    constructor(nombreC: string, salarioF: number) {
        super(nombreC, salarioF); 
    }
    
    calcularSalario(): number {
        return this.salarioF; 
    }

    calcularBeneficios(): number {
        return this.salarioF * 0.20; 
    }
}

class EmpleadoMedioTiempo extends Empleado {
    private horasTrabajadas: number;

    constructor(nombreC: string, salarioF: number, horasTrabajadas: number) {
        super(nombreC, salarioF);
        this.horasTrabajadas = horasTrabajadas;
    }

    calcularSalario(): number {
        return this.salarioF * this.horasTrabajadas; 
    }
}

const empleado1 = new EmpleadoTiempoCompleto("Juan", 3000);
const empleado2 = new EmpleadoMedioTiempo("Maria", 20, 80);
console.log(`Salario de ${empleado1.obtenerNombre()}: $${empleado1.calcularSalario()}`);
console.log(`Beneficios de ${empleado1.obtenerNombre()}: $${empleado1.calcularBeneficios()}`);
console.log(`Salario de ${empleado2.obtenerNombre()}: $${empleado2.calcularSalario()}`);

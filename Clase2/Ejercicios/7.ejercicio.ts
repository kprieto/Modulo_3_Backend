/*Ejercicio 7: Función que modifica propiedades de un objeto 
Consigna: Crea una función llamada aumentarSalario que acepte un objeto 
empleado con las propiedades nombre (string) y salario (number), y un número 
que represente el porcentaje de aumento. La función debe aumentar el salario 
del empleado y devolver el nuevo salario. Muestra en la consola el resultado. */

interface Empleado {
    nombre: string;
    salario: number;
    aumento: number; 
}

let empleado : Empleado ={
    nombre : "Daniel",
    salario : 1500,
    aumento : 20
}

function aumentarSalario(empleado : Empleado):number{
    let incremento = empleado.salario + (empleado.aumento / 100);
    empleado.salario += incremento;
    return empleado.salario
    
}

let nuevoSalario = aumentarSalario(empleado);
console.log(`El nuevo salario de ${empleado.nombre} es: ${nuevoSalario}`);
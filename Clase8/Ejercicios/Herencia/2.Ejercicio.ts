/*Ejercicio 8: Sistema de Reserva de Hotel 
Consigna: Crea un sistema para gestionar las reservas de un hotel. Define una 
clase base Cliente con propiedades privadas como nombre, numeroHabitacion, 
y un método reservar(). Luego, crea dos clases derivadas ClientePremium y 
ClienteCorporativo que sobrescriban el método reservar() para añadir 
funcionalidades adicionales. 
Adicionalmente, crea una interfaz Beneficios con un método accederBeneficios(). 
Ambas clases derivadas deben implementar esta interfaz. En la clase 
ClientePremium, el cliente podrá acceder al spa y desayuno gratis, y en la clase 
ClienteCorporativo, el cliente podrá acceder a salas de reuniones y descuentos.*/

interface Beneficios {
    accederBeneficios(): void;
}

class Cliente {
    nombre:string;
    numeroHabitacion:number;

    constructor(nombre:string, numeroHabitacion:number){
        this.nombre = nombre;
        this.numeroHabitacion = numeroHabitacion;
    }

    reservar(): void {
        console.log(`El cliente ${this.nombre} ha reservado la habitación ${this.numeroHabitacion}.`);
        
    }
}

class ClientePremium extends Cliente implements Beneficios {
    accederBeneficios(): void {
        console.log(`El cliente premium ${this.nombre} tiene acceso al spa y desayuno gratis.`);
        
    }
    reservar(): void {
        super.reservar();
        this.accederBeneficios();
    }
}

class ClienteCorporativo extends Cliente implements Beneficios{
    accederBeneficios(): void {
        console.log(`El cliente corporativo ${this.nombre} tiene acceso a salas de reuniones y descuentos.`);
        
    }
    reservar(): void {
        super.reservar();
        this.accederBeneficios();
    }
}

const cliente1 = new ClientePremium("Juan", 101);
cliente1.reservar();
const cliente2 = new ClienteCorporativo("Maria", 102);
cliente2.reservar();

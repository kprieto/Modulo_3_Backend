/*Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y 
Polimorfismo 
Crea un sistema de reservas para una peluquería. Define una clase Servicio con 
atributos comunes como nombre, duracion, y precio. Luego, crea clases 
concretas para diferentes servicios como CorteDeCabello y Manicura. 
Implementa una clase Cliente y una clase Reserva que asocie clientes con 
servicios. Usa polimorfismo para permitir la reserva de cualquier tipo de servicio 
y encapsulamiento para gestionar la disponibilidad de horarios. */


class Servicio {
    constructor(public nombre: string, public duracion: number, public precio: number) {}


    mostrarInformacion(): string {
        return `Servicio: ${this.nombre}, Duración: ${this.duracion} minutos, Precio: $${this.precio.toFixed(2)}`;
    }
}


class CorteDeCabello extends Servicio {
    constructor() {
        super("Corte de Cabello", 30, 15.99);
    }
}

class Manicura extends Servicio {
    constructor() {
        super("Manicura", 45, 22.99);
    }
}

// Clase Cliente
export class Cliente {
    constructor(public nombre: string, public telefono: string) {}

    mostrarInformacion(): string {
        return `Cliente: ${this.nombre}, Teléfono: ${this.telefono}`;
    }
}


class Reserva {
    private static disponibilidadHorarios: number[] = [9, 10, 11, 12, 14, 15, 16, 17, 18]; // Horas disponibles
    private horarioReservado: number | null = null;

    constructor(public cliente: Cliente, public servicio: Servicio) {}

    // Método para reservar un horario disponible
    reservar(horario: number): void {
        if (Reserva.disponibilidadHorarios.includes(horario)) {
        this.horarioReservado = horario;
        Reserva.disponibilidadHorarios = Reserva.disponibilidadHorarios.filter(h => h !== horario);
        console.log(`Reserva confirmada para ${this.cliente.nombre} - ${this.servicio.nombre} a las ${horario}:00.`);
        } else {
        console.log(`Horario ${horario}:00 no disponible.`);
        }
    }

    mostrarDetalles(): void {
        console.log(`${this.cliente.mostrarInformacion()} - ${this.servicio.mostrarInformacion()} - Horario: ${this.horarioReservado ? this.horarioReservado + ":00" : "No reservado"}`);
    }


    static mostrarHorariosDisponibles(): void {
        console.log("Horarios disponibles:", Reserva.disponibilidadHorarios.join(", ") + ":00");
    }
}


const cliente1 = new Cliente("Karen", "646-163-43-36");
const cliente2 = new Cliente("Luis", "646-152-69-98");

const servicioCorte = new CorteDeCabello();
const servicioManicura = new Manicura();

const reserva1 = new Reserva(cliente1, servicioCorte);
const reserva2 = new Reserva(cliente2, servicioManicura);

Reserva.mostrarHorariosDisponibles();
reserva1.reservar(10);
reserva2.reservar(14);

reserva1.mostrarDetalles();
reserva2.mostrarDetalles();

Reserva.mostrarHorariosDisponibles();
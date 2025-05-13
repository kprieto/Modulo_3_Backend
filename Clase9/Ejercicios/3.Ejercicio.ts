/*3. Compañía de Seguros: Renovación Automática de Pólizas 
Desarrolla un sistema que gestione las pólizas de seguros de una compañía. 
Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y 
una fecha de renovación. Implementa las siguientes funciones: 
• Añadir una póliza. 
• Programar la renovación de la póliza utilizando setTimeout(). 
• Mostrar todas las pólizas activas. */

class Poliza {
    id: number;
    nombreCliente: string;
    montoAsegurado: number;
    fechaRenovacion: Date;

    constructor(id: number, nombreCliente: string, montoAsegurado: number, fechaRenovacion: Date) {
        this.id = id;
        this.nombreCliente = nombreCliente;
        this.montoAsegurado = montoAsegurado;
        this.fechaRenovacion = fechaRenovacion;
    }
}
class CompaniaSeguros {
    polizas: Poliza[] = [];

    agregarPoliza(id: number, nombreCliente: string, montoAsegurado: number, fechaRenovacion: Date): void {
        const nuevaPoliza = new Poliza(id, nombreCliente, montoAsegurado, fechaRenovacion);
        this.polizas.push(nuevaPoliza);
        console.log(`Póliza de ${nombreCliente} agregada con éxito.`);
    }

    programarRenovacion(id: number): void {
        const poliza = this.polizas.find(p => p.id === id);
        const polizaIndex = this.polizas.findIndex(p => p.id === id);
        if (poliza) {
            setTimeout(() => {
                console.log(`La póliza de ${poliza.nombreCliente} ha sido renovada.`);
                this.polizas.splice(polizaIndex, 1);
                this.mostrarPolizasActivas();
            }, 5000); 
        } else {
            console.log(`No se encontró la póliza con ID ${id}.`);
        }
    }
    mostrarPolizasActivas(): void {
        console.log("Pólizas activas:");
        this.polizas.forEach(p => {
            console.log(`ID: ${p.id}, Cliente: ${p.nombreCliente}, Monto Asegurado: ${p.montoAsegurado}, Fecha de Renovación: ${p.fechaRenovacion}`);
        });
    }
}
const companiaSeguros = new CompaniaSeguros();  
companiaSeguros.agregarPoliza(1, "Juan", 100000, new Date("2023-12-01"));
companiaSeguros.agregarPoliza(2, "Maria", 200000, new Date("2023-12-15"));
companiaSeguros.agregarPoliza(3, "Pedro", 150000, new Date("2023-12-20"));
companiaSeguros.mostrarPolizasActivas();
companiaSeguros.programarRenovacion(2);
companiaSeguros.programarRenovacion(1);


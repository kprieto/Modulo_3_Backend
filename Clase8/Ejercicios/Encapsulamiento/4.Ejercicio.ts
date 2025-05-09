/*10. Ejercicio de Taller de Reparaciones 
Diseña una clase Taller que tenga propiedades privadas para nombre, direccion, 
servicios (un array de objetos con nombreServicio, precio, y descripcion), y 
calificaciones (un array para almacenar las calificaciones de los clientes). 
Implementa métodos para agregar servicios, eliminar servicios, listar los 
servicios disponibles, agregar calificaciones y calcular el promedio de 
calificaciones. Si se intenta agregar un servicio con un precio negativo, imprime 
un mensaje informativo. También imprime un mensaje si se intenta agregar una 
calificación que no está entre 1 y 5. */

class Taller {
    private nombre: string;
    private direccion: string;
    private servicios: { nombreServicio: string; precio: number; descripcion: string }[];
    private calificaciones: number[];

    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.servicios = [];
        this.calificaciones = [];
    }

    public set agregarServicio(servicio: { nombreServicio: string; precio: number; descripcion: string }) {
        if (servicio.precio < 0) {
            console.log("El precio del servicio no puede ser negativo.");
        } else {
            this.servicios.push(servicio);
            console.log(`Servicio "${servicio.nombreServicio}" agregado al taller "${this.nombre}".`);
        }
    }

    public set eliminarServicio(nombreServicio: string) {
        const index = this.servicios.findIndex(servicio => servicio.nombreServicio === nombreServicio);
        if (index === -1) {
            console.log(`El servicio "${nombreServicio}" no existe en el taller "${this.nombre}".`);
        } else {
            this.servicios.splice(index, 1);
            console.log(`Servicio "${nombreServicio}" eliminado del taller "${this.nombre}".`);
        }
    }
    
    public listarServicios(): void {
        if (this.servicios.length === 0) {
            console.log(`No hay servicios disponibles en el taller "${this.nombre}".`);
        } else {
            console.log(`Servicios disponibles en el taller "${this.nombre}":`);
            this.servicios.forEach((servicio, index) => {
                console.log(`${index + 1}. ${servicio.nombreServicio} - Precio: $${servicio.precio} - Descripción: ${servicio.descripcion}`);
            });
        }
    }
    public set agregarCalificacion(calificacion: number) {
        if (calificacion < 1 || calificacion > 5) {
            console.log("La calificación debe estar entre 1 y 5.");
        } else {
            this.calificaciones.push(calificacion);
            console.log(`Calificación ${calificacion} agregada al taller "${this.nombre}".`);
        }
    }
    public calcularPromedioCalificaciones(): number {   
        if (this.calificaciones.length === 0) {
            console.log(`No hay calificaciones disponibles para el taller "${this.nombre}".`);
            return 0;
        } else {
            const suma = this.calificaciones.reduce((a, b) => a + b, 0);
            const promedio = suma / this.calificaciones.length;
            console.log(`Promedio de calificaciones del taller "${this.nombre}": ${promedio.toFixed(2)}`);
            return promedio;
        }
    }

}
const miTaller = new Taller("Reparaciones Rápidas", "Calle Falsa 123");
miTaller.agregarServicio = { nombreServicio: "Cambio de Aceite", precio: 30, descripcion: "Cambio de aceite y filtro." };
miTaller.agregarServicio = { nombreServicio: "Reparación de Frenos", precio: 50, descripcion: "Reparación de frenos delanteros." };
miTaller.agregarServicio = { nombreServicio: "Cambio de Batería", precio: -20, descripcion: "Cambio de batería." };
miTaller.listarServicios(); 
miTaller.eliminarServicio = "Cambio de Aceite";
miTaller.agregarCalificacion = 4;
miTaller.agregarCalificacion = 5;
miTaller.agregarCalificacion = 6;
miTaller.calcularPromedioCalificaciones();
miTaller.listarServicios();

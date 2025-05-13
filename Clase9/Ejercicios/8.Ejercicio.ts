/*Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos 
Crea un sistema para gestionar una nave espacial en una misión de recolección 
de recursos en diferentes planetas. Define una clase NaveEspacial con atributos 
como combustible y capacidadDeCarga. Implementa métodos para viajar entre 
planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el 
combustible. Usa tuplas para representar las coordenadas espaciales de los 
planetas y una interfaz para los tipos de recursos recolectados. */
interface Recurso {
    tipo: string;
    cantidad: number;
}
interface Coordenadas {
    x: number;
    y: number;
    z: number;
}
class NaveEspacial {
    private combustible: number;
    private capacidadDeCarga: number;
    private recursosRecolectados: Recurso[];
    private coordenadasActuales: Coordenadas;

    constructor(combustibleInicial: number, capacidadDeCarga: number) {
        this.combustible = combustibleInicial;
        this.capacidadDeCarga = capacidadDeCarga;
        this.recursosRecolectados = [];
        this.coordenadasActuales = { x: 0, y: 0, z: 0 };
    }
    viajarA(coordenadasDestino: Coordenadas): void {
        const distancia = Math.sqrt(
            Math.pow(coordenadasDestino.x - this.coordenadasActuales.x, 2) +
            Math.pow(coordenadasDestino.y - this.coordenadasActuales.y, 2) +
            Math.pow(coordenadasDestino.z - this.coordenadasActuales.z, 2)
        );
        const combustibleNecesario = distancia * 10; // Supongamos que se consume 10 unidades de combustible por unidad de distancia
        if (this.combustible >= combustibleNecesario) {
            this.combustible -= combustibleNecesario;
            this.coordenadasActuales = coordenadasDestino;
            console.log(`Viajando a (${coordenadasDestino.x}, ${coordenadasDestino.y}, ${coordenadasDestino.z}). Combustible restante: ${this.combustible}`);
        } else {
            console.log("No hay suficiente combustible para el viaje.");
        }
    }
    recolectarRecurso(recurso: Recurso): void {
        const cargaActual = this.recursosRecolectados.reduce((total, r) => total + r.cantidad, 0);
        if (cargaActual + recurso.cantidad <= this.capacidadDeCarga) {
            this.recursosRecolectados.push(recurso);
            console.log(`Recolección de ${recurso.cantidad} unidades de ${recurso.tipo} exitosa.`);
        } else {
            console.log("No hay suficiente capacidad de carga para recolectar más recursos.");
        }
    }
    mostrarRecursos(): void {
        console.log("Recursos recolectados:");
        this.recursosRecolectados.forEach(recurso => {
            console.log(`Tipo: ${recurso.tipo}, Cantidad: ${recurso.cantidad}`);
        });
    }
    mostrarEstadoNave(): void {
        console.log(`Combustible: ${this.combustible}, Capacidad de carga: ${this.capacidadDeCarga}`);
        console.log(`Coordenadas actuales: (${this.coordenadasActuales.x}, ${this.coordenadasActuales.y}, ${this.coordenadasActuales.z})`);
    }


}
const nave = new NaveEspacial(1000, 500);
nave.mostrarEstadoNave();
nave.viajarA({ x: 10, y: 20, z: 30 });
nave.recolectarRecurso({ tipo: "Oxígeno", cantidad: 20 });
nave.recolectarRecurso({ tipo: "Minerales", cantidad: 30 });
nave.mostrarRecursos();
nave.mostrarEstadoNave();
nave.viajarA({ x: 50, y: 60, z: 70 });
nave.recolectarRecurso({ tipo: "Agua", cantidad: 40 });
nave.mostrarRecursos();
nave.mostrarEstadoNave();

/*Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real 
Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método 
preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción 
para que ambas bebidas oculten su lógica de preparación interna pero 
expongan un comportamiento común. */

interface Bebida {
    preparar(): void;
}
class Cafe implements Bebida {
    preparar(): void {
        console.log("Preparando café...");
        this.molerCafe();
        this.hervirAgua();
        this.meclar();
    }
    private molerCafe(): void {
        console.log("Molendo café...");
    }
    private hervirAgua(): void {
        console.log("Hirviendo agua...");
    }
    private meclar(): void {
        console.log("Mezclando café y agua...");
    }
}

class Te implements Bebida {
    preparar(): void {
        console.log("Preparando té...");
        this.hervirAgua();
        this.agregarTe();
        this.meclar();
    }
    private hervirAgua(): void {
        console.log("Hirviendo agua...");
    }
    private agregarTe(): void {
        console.log("Agregando té...");
    }
    private meclar(): void {
        console.log("Mezclando té y agua...");
    }
}   

const cafe = new Cafe();
cafe.preparar();
console.log("-----------------");
const te = new Te();
te.preparar();
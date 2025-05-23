/*Ejercicio 4: Comparación - Clases Abstractas vs Interfaces 
Crea una interfaz PagoOnline con un método procesarPago(). 
Crea una clase abstracta Pago con un método concreto validarMonto() y un 
método abstracto completarPago(). 
Implementa ambas estructuras en una clase concreta PagoConTarjeta. */

interface PagoOnline {
    procesarPago(monto: number): void;
}

abstract class Pago{
    protected monto: number;
    constructor(monto: number) {
        this.monto = monto;
    }
    validarMonto(): boolean { 
        if (this.monto > 0) {
            console.log("Monto válido.");
            return true;
        } else {
            console.log("Monto inválido.");
            return false;
        }
    }

    abstract completarPago(): void; 
}

class PagoConTarjeta extends Pago implements PagoOnline {
    private tarjeta: string;
    constructor(monto: number, tarjeta: string) {
        super(monto);
        this.tarjeta = tarjeta;
    }

    procesarPago(monto: number): void {
        if (this.validarMonto()) {
            console.log(`Procesando pago de ${monto} con tarjeta ${this.tarjeta}.`);
            this.completarPago();
        }
    }

    completarPago(): void { 
        console.log("Pago completado con tarjeta.");
    }
}
const pago = new PagoConTarjeta(100, "1564-5678-9012-3456");    
pago.procesarPago(100);
//Clase base
export abstract class Pago{
    abstract procesarPago(monto: number): void; 

}

//Clase derivada que va a tener un comportamiento especifico
class PagoConTarjeta extends Pago{
    procesarPago(monto: number): void {
        console.log(`Pago de $${monto} procesado con tarjeta de crédito.`);
    }
}

class PagoConEfectivo extends Pago{
    procesarPago(monto: number): void {
        console.log(`Pago de $${monto} procesado en efectivo.`);
    }
}

class PagoConTransferencia extends Pago{
    procesarPago(monto: number): void {
        console.log(`Pago de $${monto} procesado por transferencia bancaria.`);
    }
}

// Uso del polimorfismo
const procesar = (pago: Pago, monto: number) => {
    pago.procesarPago(monto);
}

const formaDePago1 = new PagoConTarjeta();
const formaDePago2 = new PagoConEfectivo();
const formaDePago3 = new PagoConTransferencia();

procesar(formaDePago1, 100); 
procesar(formaDePago2, 50);         
procesar(formaDePago3, 200); 



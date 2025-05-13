/*Ejercicio 6: Encapsulamiento en clases 
Crea una clase CuentaBancaria que tenga atributos privados como saldo y un 
método público para consultar el saldo y otro para depositar dinero. */

export class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public consultarSaldo(): number {
        return this.saldo;
    }

    public depositarDinero(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Se han depositado ${monto}. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("El monto a depositar debe ser mayor que cero.");
        }
    }
}

const cuenta = new CuentaBancaria(1000);
console.log(`Saldo inicial: ${cuenta.consultarSaldo()}`);
cuenta.depositarDinero(500);
console.log(`Saldo después del depósito: ${cuenta.consultarSaldo()}`);
cuenta.depositarDinero(-200); // Intento de depósito inválido
console.log(`Saldo después del intento de depósito inválido: ${cuenta.consultarSaldo()}`);
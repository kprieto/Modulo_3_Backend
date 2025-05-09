/*Ejercicio 9: Encapsulamiento y Herencia con Protección de Datos 
Crea una clase CuentaBancaria con métodos para depositar y retirar dinero, 
pero protege el saldo para que solo pueda ser modificado dentro de la clase. 
Crea una subclase CuentaAhorros que agregue interés al saldo. */

class CuentaBancaria {      
    private saldo: number; 

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Se han depositado $${monto}. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("El monto a depositar debe ser mayor que 0.");
        }
    }

    public retirar(monto: number): void {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Se han retirado $${monto}. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("Monto inválido para retirar.");
        }
    }

    public obtenerSaldo(): number { 
        return this.saldo;
    }
}

class CuentaAhorros extends CuentaBancaria { 
    private interes: number; 

    constructor(saldoInicial: number, interes: number) {
        super(saldoInicial); 
        this.interes = interes;
    }

    public agregarInteres(): void { 
        const interesGanado = this.obtenerSaldo() * this.interes / 100;
        this.depositar(interesGanado); 
        console.log(`Se han agregado $${interesGanado} de interés. Nuevo saldo: $${this.obtenerSaldo()}`);
    }
}
console.log('--------Cuenta Bancaria--------');
const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);     
cuenta.retirar(200); 
console.log(`Saldo actual de la Cuenta Bancaria: $${cuenta.obtenerSaldo()}`); 
console.log('--------Cuenta de Ahorros--------');
const cuentaAhorros = new CuentaAhorros(2000, 5); 
cuentaAhorros.depositar(1000);         
cuentaAhorros.agregarInteres();
console.log(`Saldo actual de la Cuenta de Ahorros: $${cuentaAhorros.obtenerSaldo()}`); 

export { CuentaBancaria}; 

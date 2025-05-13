/*5. Banco: Transferencias Programadas 
Crea un sistema para gestionar cuentas bancarias en un banco. Cada cuenta 
debe tener un nombre del propietario, un saldo y un estado (activo o inactivo). 
Implementa las siguientes funciones: 
• Añadir una cuenta. 
• Realizar una transferencia entre cuentas después de un retraso de 8 
segundos utilizando setTimeout(). 
• Mostrar todas las cuentas. */

class CuentaBancaria {
    nombrePropietario: string;
    saldo: number;
    estado: boolean;

    constructor(nombrePropietario: string, saldo: number, estado: boolean) {
        this.nombrePropietario = nombrePropietario;
        this.saldo = saldo;
        this.estado = estado;
    }
}

class Banco {
    cuentas: CuentaBancaria[] = [];

    agregarCuenta(nombrePropietario: string, saldo: number, estado: boolean): void {
        const nuevaCuenta = new CuentaBancaria(nombrePropietario, saldo, estado);
        this.cuentas.push(nuevaCuenta);
        console.log(`Cuenta de ${nombrePropietario} agregada con éxito.`);
    }

    realizarTransferencia(nombrePropietarioOrigen: string, nombrePropietarioDestino: string, monto: number): void {
        const cuentaOrigen = this.cuentas.find(c => c.nombrePropietario === nombrePropietarioOrigen);
        const cuentaDestino = this.cuentas.find(c => c.nombrePropietario === nombrePropietarioDestino);
        const cuentaOrigenIndex = this.cuentas.findIndex(c => c.nombrePropietario === nombrePropietarioOrigen);
        const cuentaDestinoIndex = this.cuentas.findIndex(c => c.nombrePropietario === nombrePropietarioDestino);

        if (cuentaOrigen && cuentaDestino) {
            setTimeout(() => {
                if (cuentaOrigen.saldo >= monto) {
                    cuentaOrigen.saldo -= monto;
                    cuentaDestino.saldo += monto;
                    console.log(`Transferencia de ${monto} realizada de ${cuentaOrigen.nombrePropietario} a ${cuentaDestino.nombrePropietario}.`);
                } else {
                    console.log(`Fondos insuficientes en la cuenta de ${cuentaOrigen.nombrePropietario}.`);
                }
                this.mostrarCuentas();
            }, 8000); // Retraso de 8 segundos
        } else {
            console.log(`No se encontró la cuenta de origen o destino.`);
        }
    }
    mostrarCuentas(): void {
        console.log("Cuentas bancarias:");
        this.cuentas.forEach(c => {
            console.log(`Propietario: ${c.nombrePropietario}, Saldo: ${c.saldo}, Estado: ${c.estado ? "Activo" : "Inactivo"}`);
        });
    }
}
const banco = new Banco();
banco.agregarCuenta("Juan", 1000, true);
banco.agregarCuenta("Maria", 2000, true);
banco.agregarCuenta("Pedro", 1500, true);
banco.mostrarCuentas();
banco.realizarTransferencia("Juan", "Maria", 300);
banco.realizarTransferencia("Maria", "Pedro", 500); 
banco.realizarTransferencia("Juan", "Pedro", 2000); // Fondos insuficientes
banco.realizarTransferencia("Juan", "Maria", 500);
banco.realizarTransferencia("Maria", "Juan", 1000); // Fondos insuficientes
banco.realizarTransferencia("Maria", "Pedro", 1000);
banco.mostrarCuentas




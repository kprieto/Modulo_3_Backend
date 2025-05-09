/*Ejercicio 10: Polimorfismo y Sobreescritura Compleja con Interacción entre 
Clases 
Crea una clase Cliente que pueda asociarse a una CuentaBancaria. Crea 
diferentes tipos de clientes, como ClienteVIP que tiene beneficios adicionales. 
Cada tipo de cliente puede realizar depósitos y retiros, pero los clientes VIP 
pueden retirar sin comisiones. */

import { CuentaBancaria } from './3.Ejercicio'; // Asegúrate de que la ruta sea correcta
class Cliente {
    private nombre: string;
    protected cuenta: CuentaBancaria;

    constructor(nombre: string, cuenta: CuentaBancaria) {
        this.nombre = nombre;
        this.cuenta = cuenta;
    }

    public depositar(monto: number): void {
        this.cuenta.depositar(monto);
    }

    public retirar(monto: number): void {
        this.cuenta.retirar(monto);
    }

    public obtenerSaldo(): number {
        return this.cuenta.obtenerSaldo();
    }

}

class ClienteVIP extends Cliente {
    private comision: number = 0; // Los clientes VIP no tienen comisiones

    constructor(nombre: string, cuenta: CuentaBancaria) {
        super(nombre, cuenta);
    }

    public retirar(monto: number): void {
        if (monto > 0 && monto <= this.obtenerSaldo()) {
            this.cuenta.retirar(monto - this.comision); // Sin comisiones para clientes VIP
            console.log(`Cliente VIP ha retirado $${monto} sin comisiones.`);
        } else {
            console.log("Monto inválido para retirar.");
        }
    }
}

class ClienteRegular extends Cliente {  
    private comision: number = 5; // Comisiones para clientes regulares

    constructor(nombre: string, cuenta: CuentaBancaria) {
        super(nombre, cuenta);
    }

    public retirar(monto: number): void {
        if (monto > 0 && monto <= this.obtenerSaldo()) {
            this.cuenta.retirar(monto + this.comision); // Con comisiones para clientes regulares
            console.log(`Cliente Regular ha retirado $${monto} con una comisión de $${this.comision}.`);
        } else {
            console.log("Monto inválido para retirar.");
        }
    }
}

const cuenta1 = new CuentaBancaria(1000);
const cuenta2 = new CuentaBancaria(2000);
const clienteVIP = new ClienteVIP("Juan", cuenta1);
const clienteRegular = new ClienteRegular("Maria", cuenta2);
clienteVIP.depositar(500);
clienteVIP.retirar(200);    
console.log(`Saldo actual de ${clienteVIP["nombre"]}: $${clienteVIP.obtenerSaldo()}`);
clienteRegular.depositar(1000);
clienteRegular.retirar(300);
console.log(`Saldo actual de ${clienteRegular["nombre"]}: $${clienteRegular.obtenerSaldo()}`);

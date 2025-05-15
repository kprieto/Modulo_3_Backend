/*Ejercicio 3: Encapsulamiento con Métodos Privados 
Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser 
modificado a través de un método depositar y otro retirar, los cuales deben 
validar que la cantidad no sea negativa. Implementa métodos públicos para 
consultar el saldo. */

export class Banco {
    private saldoInicial:number;

    constructor(saldoInicial:number){
        this.saldoInicial = saldoInicial;
    }

    consultarSaldo(): string {
        return `Saldo actual: $${this.saldoInicial}`;
    }

    public depositar(cantidad:number):string{
        if(cantidad<=0){
            return `No puedes depositar una cantidad en cero o negativa.`;
        }else{
            this.saldoInicial += cantidad
            return `Depósito realizado: $${cantidad}. ${this.consultarSaldo()}`;
        }
    }

    public retirar(cantidad:number):string{
        if(cantidad<=0){
            return `No puedes retirar una cantidad en cero o negativa.`;
        }else if(cantidad > this.saldoInicial){
            return `Fondos insuficientes. No puedes retirar más de lo que tienes. ${this.consultarSaldo()}`;
        }else{
            this.saldoInicial -= cantidad;
            return `Retiro realizado: $${cantidad}. ${this.consultarSaldo()}`;
        }
    }

}

const miBanco = new Banco(100); 

console.log(miBanco.consultarSaldo()); 
console.log(miBanco.depositar(50));
console.log(miBanco.depositar(-50)); 
console.log(miBanco.retirar(30)); 
console.log(miBanco.retirar(150)); 
console.log(miBanco.depositar(-10));
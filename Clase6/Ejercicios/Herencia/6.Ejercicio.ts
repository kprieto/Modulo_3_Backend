/*Ejercicio 6: Herencia con Métodos Sobrescritos y super 
Consigna: Crea una clase base Zoologico con el método abrirPuertas(), que 
indique que el zoológico está abierto. Crea una clase derivada ZoologicoSafari 
que sobrescriba el método abrirPuertas() pero llamando al método de la clase 
base con super. */

class Zoologico{
    abrirPuertas(): void {
        console.log(`Zoológico está abierto.`);
    }
}

class ZoologicoSafari extends Zoologico{
    abrirPuertas(): void {
        super.abrirPuertas(); 
        console.log(`Zoológico Safari está abierto.`);
    }
}

const zoologico = new ZoologicoSafari();
zoologico.abrirPuertas();
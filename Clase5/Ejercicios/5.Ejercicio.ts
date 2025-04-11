/*Ejercicio 5: Interfaz 
1. Define una interfaz llamada IPersona con propiedades nombre, edad y un 
método presentarse(). 
2. Crea una clase llamada Persona que implemente esta interfaz y 
proporciona la implementación del método presentarse(). */

interface IPersona{
    nombre: string;
    edad: number;

    presentarse: () => string;
}

const persona1: IPersona = {
    nombre: "Ana",
    edad: 35,

    presentarse: function() {
        return`Hola soy ${persona1.nombre} y tengo ${persona1.edad} anios.`;
        
    }
}

const presentacion = persona1.presentarse()
console.log(presentacion); 
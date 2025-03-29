/*Ejercicio 3: Creación y manipulación de objetos 
Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre 
(string), deporte (string), y energia (number). Luego, define una función entrenar 
que acepte el objeto deportista y un número de horas de entrenamiento, 
disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al 
final, muestra el estado del deportista en la consola. */
let deportista: {nombre: string; deporte: string; energia: number, entrenar: Function}={
    nombre: "Karen",
    deporte: "Hockey",
    energia: 100,
    entrenar(horas: number): any {
        let energiaRestante: number = this.energia - (5 * horas)
        return energiaRestante;
    }
}

console.log(deportista.entrenar(5));

/*Ejercicio 7: Uso de tuplas en una función genérica (Ejercicio Entrevista) 
Crea una función genérica que acepte una tupla con dos elementos de cualquier 
tipo y retorne una nueva tupla con los elementos invertidos. 
Para este ejercicio deben pensar mucho porque es para poner en juego la lógica 
de programacion */
function invertirTupla<T, U>(tupla: [T, U]): [U, T] {
    return [tupla[1], tupla[0]];
}
const tuplaOriginal: [number, string] = [1, "Hola"];
const tuplaInvertida = invertirTupla(tuplaOriginal);
console.log(tuplaInvertida); 
const tuplaOriginal2: [string, boolean] = ["Hola", true];
const tuplaInvertida2 = invertirTupla(tuplaOriginal2);
console.log(tuplaInvertida2);
const tuplaOriginal3: [number, number] = [1, 2];
const tuplaInvertida3 = invertirTupla(tuplaOriginal3);  
console.log(tuplaInvertida3);
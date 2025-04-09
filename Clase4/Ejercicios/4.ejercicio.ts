/*Actividad 4: Usar aserciones de tipo 
Declara una variable de tipo any y usa una aserción para tratarla como string, 
accediendo a la propiedad .length. */

let valorG: any = "Chicas programadoras!!!";


let longitud: number = (valorG as String).length;
console.log(`Longitud del String: ${longitud}`);
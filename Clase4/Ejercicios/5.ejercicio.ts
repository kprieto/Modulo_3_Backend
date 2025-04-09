/*Actividad 5: Usar aserciones dobles 
Crea una variable de tipo any y haz una conversión con aserciones dobles para 
convertirla en un number. Muestra el resultado. */
export let valor: any = "42";

let numero: number = (valor as unknown) as number;

console.log(`El valor convertido a number es: ${numero}`);
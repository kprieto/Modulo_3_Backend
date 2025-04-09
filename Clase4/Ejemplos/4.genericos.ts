// Ejemplo de funcion generica
function identidad<T>(valor: T): T{
    return valor
}

//Ejemplo de uso de la funcion 
let numero = identidad<Number>(10)
console.log(`Ejemplo de uso con tipo number: ${numero}`);

let texto =identidad<String>("Hola");
console.log(`Ejemplo de uso con tipo string: ${texto}`);

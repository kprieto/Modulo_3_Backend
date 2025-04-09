/*Actividad 3: Crear una función genérica 
Crea una función genérica que tome un parámetro de cualquier tipo y lo 
devuelva. Prueba la función con diferentes tipos de datos. */
function variosTipos<T>(valor: T): T{
    return valor
}


export let numero = variosTipos<Number>(10)
console.log(`Ejemplo de uso con tipo number: ${numero}`);

export let texto =variosTipos<String>("Hola");
console.log(`Ejemplo de uso con tipo string: ${texto}`);

let booleano = variosTipos<Boolean>(true);
console.log(`Ejemplo de uso con tipo booleano: ${booleano}`);

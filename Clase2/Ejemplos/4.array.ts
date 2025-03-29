// Declaracion de un array simple
let frutas: string[]= ['manzana','banana', 'pera']

// agregamos un fruta al final
frutas.push('naranja');
console.log('Agregamos una fruta al final:', frutas);

// eliminamos la ultima fruta
let ultimaFruta = frutas.pop();
console.log('Eliminamos la ultima fruta:', ultimaFruta);

//combinamos todos los elementos del array en una cadena
let cadenaFrutas = frutas.join(' - ');
console.log('combinamos todos los elementos del array en una cadena:', cadenaFrutas);


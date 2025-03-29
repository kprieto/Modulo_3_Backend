// 1. Definicion de un enum numerico
enum colores {
    Rojo,
    Verde,
    Azul
}

// Acceder a los valores del enum
let coloresFavoritos: colores = colores.Verde;
console.log("Color Favorito (por numero):", coloresFavoritos);

console.log('Nombre del color por indice', colores[coloresFavoritos]);

//2. Definicion de enum de cadenas
enum direcciones {
    Norte = 'N',
    Sur = 'S',
    Este = 'E',
    Oeste = 'O'
}

//asignar un valor del enum a una variable
let direccionViaje: direcciones = direcciones.Norte
console.log('Direccion del viaje', direccionViaje);

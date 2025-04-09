/*Actividad 7: Aserciones y genéricos con funciones y objetos 
Crea una función genérica llamada procesarObjeto que reciba un objeto 
genérico y: 
1. Use un bucle for...in para recorrer sus propiedades. 
2. Si el valor de una propiedad es una cadena de texto (string), conviértelo a 
minúsculas. 
3. Si es un número (number), elévalo al cuadrado. 
4. Si es un booleano, invierte su valor. 
Usa aserciones de tipo para realizar las transformaciones. */

let informacion = {
    nombre: "Karen",
    edad: 30,
    esEstudiante: true,
    comentario: "Hola Mundo",
    valorNumerico: 7
}

function procesarObjeto<T>(obj: T): T {
    const resultado = { ...obj }; 

    for (const key in resultado) {
        const valor = resultado[key]; 
        
        if (typeof valor === "string") {
            resultado[key] = valor.toLowerCase() as any;
        } else if (typeof valor === "number") {
            resultado[key] = Math.pow(valor, 2) as any;
        } else if (typeof valor === "boolean") {
            resultado[key] = !valor as any;
        }
        }

    return resultado;
}

const objetoProcesado = procesarObjeto(informacion);
console.log("Objeto original:", informacion);
console.log("Objeto procesado:", objetoProcesado);
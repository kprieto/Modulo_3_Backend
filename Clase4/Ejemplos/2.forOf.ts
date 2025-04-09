// Declaramos un array

let lenguajes=["JavaScript", "Python", "TypeScript"]

for (let lenguaje of lenguajes){
    console.log(`Ejemplo array: ${lenguaje}`);
    
}

// En este caso el bucle for..of recorre los valores del array.
console.log('--------------------------');

//Ejemplo de for of con cadena de texto (string)
let saludo = "Hola"
for (let letra of saludo){
    console.log(`Ejemplo con string: ${letra}`);
    
}
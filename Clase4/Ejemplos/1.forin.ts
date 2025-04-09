// Ejemplo básico con un objeto
let alumna ={
    nombre : "Lucia",
    edad: 33,
    curso: "Programacion"
}

// Este for ... in va a interar sobre las propiedades del objeto alumna.
// se imprimen las claves y los valores correspondientes
for (let propiedad in alumna){
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`)
}

// keyof typeof: con esto estamos queriendo decir que la variable propiedad
// es una clave valida para el objeto alumna

// Ejmplos de for ... in en arrays

let arrayLenguajes=["JavaScript", "Python", "TypeScript"]

for (let lenguaje in arrayLenguajes){
    console.log(`Ejemplo array: ${lenguaje}`);
    
}
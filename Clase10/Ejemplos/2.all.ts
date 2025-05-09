// promesas de ejemplo
const promesa1 = Promise.resolve(3); 
//crea una promesa que se resuelve con el valor 3

const promesa2 = new Promise((resolve,reject)=>{
    //crea una promesa que se resuelve despues de 100ms
    setTimeout(resolve, 100, "Hola Mundo!");
})

const promesa3 = new Promise((resolve,reject)=>{
    //crea otra promesa que se resuelve despues de  500ms
    setTimeout(resolve, 500, "Chicas");
})

// usamos el promise.all para esperar a que todas las promesas se resuelvan
Promise.all([promesa1,promesa2,promesa3])
    .then((resultados)=>{
        console.log("Resultado todas las promesas: ", resultados);
    })
    .catch((error)=>{
        console.error("Una de las promesas fue rechazada: ", error);
    })

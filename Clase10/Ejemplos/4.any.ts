export const promesa1 = Promise.reject("Error en la promesa 1");
export const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve,100, "Hola")
}) 
export const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve,500, "Chicas")
})

Promise.any([promesa1, promesa2, promesa3])
    .then((resultado) => {
        console.log("Promesa resuelta: ", resultado);
    })
    .catch((error) => {
        console.error("Todas las promesas fueron rechazadas: ", error);
    })
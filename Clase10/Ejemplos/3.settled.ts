export const promesa1 = Promise.reject("Error en la promesa 1");
export const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve,100, "Hola")
}) 
export const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve,500, "Chicas")
})

Promise.allSettled([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log("Resultado de todas las promesas: ", resultados);
    })

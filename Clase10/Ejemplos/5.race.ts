export const promesa1 = new Promise((resolve) => {
    setTimeout(resolve,100, "Promesa 1 completado")
}) 
export const promesa2 = new Promise((resolve) => {
    setTimeout(resolve,500, "Promesa 2 completado")
})

Promise.race([promesa1, promesa2])
    .then((resultado) => {
        console.log("Resultado de la promesa ganadora: ", resultado);
    })

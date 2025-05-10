/*Ejercicio 4: Promise.race() - Carrera entre Tareas 
Consigna: 
Crea tres promesas que representen tareas con tiempos de ejecución aleatorios. 
Usa Promise.race() para que el programa imprima solo la primera tarea que se 
complete. Luego: 
1. Asegúrate de que se imprime qué tarea ganó la carrera. 
2. Controla posibles errores si alguna de las promesas falla. */

const tarea1 = new Promise((resolve, reject) => {
    const tiempo = Math.floor(Math.random() * 5000) + 1000; // Tiempo aleatorio entre 1 y 5 segundos
    setTimeout(() => {
        resolve("Tarea 1 completada");
    }, tiempo);
}
);
const tarea2 = new Promise((resolve, reject) => {
    const tiempo = Math.floor(Math.random() * 5000) + 1000; // Tiempo aleatorio entre 1 y 5 segundos
    setTimeout(() => {
        resolve("Tarea 2 completada");
    }, tiempo);
}
);  
const tarea3 = new Promise((resolve, reject) => {
    const tiempo = Math.floor(Math.random() * 5000) + 1000; // Tiempo aleatorio entre 1 y 5 segundos
    setTimeout(() => {
        resolve("Tarea 3 completada");
    }, tiempo);
}
);

Promise.race([tarea1, tarea2, tarea3])
    .then((resultado) => {
        console.log(`Ganó la carrera: ${resultado}`);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
    .finally(() => {
        console.log("Operación finalizada.");
    });
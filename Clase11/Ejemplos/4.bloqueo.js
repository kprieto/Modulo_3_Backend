const { set } = require("lodash");

// Funciones que simulan tareas
function tareaAsincrona1(){
    return new Promise (resolve => setTimeout(() => 
        resolve("Tarea 1 completada"), 2000)); 

}

function tareaAsincrona2(){
    return new Promise (resolve => setTimeout(() => 
        resolve("Tarea 2 completada"), 2000)); 

}

function tareaAsincrona3(){
    return new Promise (resolve => setTimeout(() => 
        resolve("Tarea 3 completada"), 2000)); 

}

//funcion principal para ejecutar las tareas
async function ejecutarTareas() {
    try {
        //llamamos a las tareas sin await, asi se ejecutan en paralelo
        const promesa1 = tareaAsincrona1(); // Inicia la tarea 1
        const promesa2 = tareaAsincrona2(); // Inicia la tarea 2        
        const promesa3 = tareaAsincrona3(); // Inicia la tarea 3

        const resultados = await Promise.all([promesa1, promesa2, promesa3]);
        console.log("Resultado :", resultados);
         // Espera a que todas las tareas se completen
    } catch (error) {
        console.error("Error en la ejecución de tareas:", error);
    }
}

ejecutarTareas();
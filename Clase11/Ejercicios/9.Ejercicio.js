/*9. Ejecución Condicional en Base a Resultados de Promesas 
Imagina que necesitas ejecutar una tarea sólo si otra ha sido exitosa. Crea una 
función tarea1 que simule la realización de una tarea en 2 segundos. Luego, 
escribe otra función tarea2 que dependa de la finalización exitosa de tarea1. Si 
tarea1 se completa, tarea2 debe ejecutarse; de lo contrario, no debe ejecutarse 
nada. 
Este ejercicio muestra cómo encadenar tareas y ejecutar una tarea 
condicionalmente en función del resultado de una promesa. */
function tarea1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea 1 completada");
            resolve(true); // Simulamos que la tarea fue exitosa
        }, 2000); 
    });
}
function tarea2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea 2 completada");
            resolve(true);
        }, 2000); 
    });
}
async function ejecutarTareas() {
    try {
        const resultadoTarea1 = await tarea1(); 
        if (resultadoTarea1) {
            console.log("Ejecutando tarea 2...");
            await tarea2();
        } else {
            console.log("No se ejecuta tarea 2 porque tarea 1 falló");
        }
    } catch (error) {
        console.error("Error en la ejecución de tareas:", error);
    }
}
ejecutarTareas(); 
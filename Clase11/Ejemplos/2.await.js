// Funcion que simula un proceso asincrono que tarda 2 segundos
function procesoLargo() {
    return new Promise((resolve) => {
        setTimeout(() =>resolve("Proceso largo terminado"),2000); // Simula un proceso largo de 3 segundos
    });
}

//Funcion principal que usara await para esperar el resultasdo de procesoLargo
async function ejecutarProceso() {
    console.log("Iniciando proceso...");

    // pausa la ejecicion del procesoLargo que se resuleve en 2 segundos
    const resultado = await procesoLargo();
    console.log(resultado);// muesta el proceso completado 

    console.log("Proceso terminado.");
}

ejecutarProceso();
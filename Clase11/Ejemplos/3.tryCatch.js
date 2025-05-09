//funcion que solicita datos, con un opcion de exito o error
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.5; 

            if (exito) {
                resolve("Datos recibidos correctamente");
            } else {
                reject(new Error("Error al obtener los datos"));
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// funcion asincrona que intenta obtener los datos y maneja el resultado o error
async function consultarDatos() {
    try {
        console.log("Iniciando consulta de datos...");
        // pausa hasta que obtenerDatos se completo y atrapa un error si ocurre
        const resultado = await obtenerDatos(false);    // Cambia a true para simular un éxito
        console.log(resultado); 
    } catch (error) {
        console.error("Ocurrio un error:", error.message); 
    } finally {
        console.log("Finalizando consulta de datos..."); 
    }
}

consultarDatos();
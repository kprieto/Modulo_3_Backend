//Actualizacion de una interfaz grafica
// setInterval() tambien puede ser util para actuazalizar partes de una interfaz grafica
// de usuario de forma periodica. Por ejemplo, un reloj
// que se actualiza cada segundo

function actualizarReloj() {
    // creamos una nueva instancia de date para obtener la fecha y hora actuales
    const ahora = new Date();
    //obtenemos la hora actual (0 a 23) de la instancia de date
    const horas = ahora.getHours();
    //obtenemos los minutos actuales (0 a 59) de la instancia de date
    const minutos = ahora.getMinutes();
    //obtenemos los segundos actuales (0 a 59) de la instancia de date
    const segundos = ahora.getSeconds();

    // mostramos la hora actual en formato "horas:minutos:segundos"
    console.log(`${horas}:${minutos}:${segundos}`);
    
}

// se crea un intervalo que llama la funcion de actualizasrReloj cada segundo (1000 milisegundos) 
let relojIntervalo = setInterval(actualizarReloj, 1000);
//Importante: este intervalo seguira ejecutandose indefinidamente hasta que sea detenido manualmente
//usando el clear si se necesita


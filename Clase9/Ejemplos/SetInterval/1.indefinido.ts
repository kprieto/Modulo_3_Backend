// Intervalo indefinido (cancelacion manual)
// el setInterval () seguira ejecutandose hasta que los detengamos manualmente
let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log(`Contador (indefinido): ${contador}`);
    // aqui prodriamos llamar a clearInterval(intervalo) en algun momento
    // para detener el intervalo indefinido. Por ejemplo, podrias tener alguna
    // condicional externa o un evento que lo detenga, pero en este
    // caso lo dejaremos correr indefinidamente.
},1000)
console.log("intervalo indefinido iniciado");

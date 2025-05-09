// 2. Ejecucion con calcelacion
// úedes asignar setTimeout a una variable y luego cancelarlo antes
// de que se cumple el tiempo utilizando clearTimeout()
let temporizador = setTimeout(() => {
    console.log("Este mensaje no se mostrara porque concelaremos el temporizador.");
}, 3000);

clearTimeout(temporizador); // Cancela el temporizador antes de que se ejecute
// por lo tanto, este codigo no se va ver
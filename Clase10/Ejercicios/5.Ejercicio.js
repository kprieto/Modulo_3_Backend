/*Ejercicio 5: Promesas Anidadas - Flujo Completo de Registro y Bienvenida 
Consigna: 
Crea una secuencia de promesas que simulen el flujo de un usuario que se 
registra en una plataforma y luego recibe un mensaje de bienvenida. La 
secuencia debe ser: 
1. Registrar Usuario (promesa que tarda 2 segundos). 
2. Enviar Email de Bienvenida (promesa que tarda 1 segundo). 
3. Mostrar Mensaje Final al completar ambas tareas. 
Si alguna de las promesas falla, debe imprimirse un mensaje de error. */


function registrarUsuario(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.2; 
            if (exito) {
                resolve(`Usuario ${nombre} registrado exitosamente.`);
            } else {
                reject(`Error al registrar el usuario ${nombre}.`);
            }
        }, 2000); 
    });
}


function enviarEmailBienvenida(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.1; // Probabilidad de éxito del 90%
            if (exito) {
                resolve(`Email de bienvenida enviado a ${nombre}.`);
            } else {
                reject(`Error al enviar el email de bienvenida a ${nombre}.`);
            }
        }, 1000); 
    });
}


function iniciarRegistro(nombre) {
    registrarUsuario(nombre)
        .then((mensajeRegistro) => {
            console.log(mensajeRegistro);
            return enviarEmailBienvenida(nombre);
        })
        .then((mensajeEmail) => {
            console.log(mensajeEmail);
            console.log("Operación completada exitosamente.");
        })
        .catch((error) => {
            console.log(error);
            console.log("Se detuvo el proceso debido a un error.");
        });
}


iniciarRegistro("Karen");
iniciarRegistro("Daniel");
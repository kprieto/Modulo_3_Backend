/*6. Simulación de Autenticación de Usuario con Manejo de Errores 
Imagina que estás desarrollando el sistema de inicio de sesión para una 
aplicación. En esta aplicación, el sistema debe validar que el nombre de usuario 
existe y es válido. Si el usuario no existe o se envía null o undefined como 
nombre de usuario, la función de autenticación debe fallar y lanzar un error. 
Para lograrlo: 
• Crea una función llamada autenticar que tome el nombre de usuario como 
parámetro. 
• La función debe simular un tiempo de validación de 2 segundos y retornar 
"Autenticación exitosa" si el nombre de usuario es válido. 
• En caso de que el usuario sea null o undefined, la función debe lanzar un 
error. 
• Utiliza try/catch en una función principal iniciarSesion para manejar los 
errores y mostrar un mensaje de éxito o error. 
Este ejercicio es esencial para aprender a manejar errores en operaciones de 
autenticación, simulando problemas comunes que podrías encontrar en 
sistemas de login. */
function autenticar(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario) {
                resolve("Autenticación exitosa");
            } else {
                reject("Error: Usuario no válido o no existe");
            }
        }, 2000); 
    });
}

async function iniciarSesion(usuario) {
    try {
        console.log("Iniciando sesión...");
        const resultado = await autenticar(usuario); 
        console.log(resultado); 
    } catch (error) {
        console.error(error); 
    } finally {
        console.log("Finalizando proceso de inicio de sesión..."); 
    }
}

iniciarSesion("karen"); 
iniciarSesion(null); 

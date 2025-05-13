/*4. Redes Sociales: Notificaciones de Amigos 
Implementa un sistema de gestión de amigos en una red social. Cada amigo 
debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un 
setInterval() para verificar el estado de los amigos cada 5 segundos y enviar una 
notificación si un amigo se pone en línea.*/


interface Amigo {
    nombre: string;
    enLinea: boolean;
}

const amigos: Amigo[] = [
    { nombre: "Karen", enLinea: false },
    { nombre: "Luis", enLinea: false },
    { nombre: "Ana", enLinea: false },
];


function verificarEstadoAmigos() {
        amigos.forEach((amigo) => {
        const estadoAnterior = amigo.enLinea;
        amigo.enLinea = Math.random() > 0.5; 
        
        if (!estadoAnterior && amigo.enLinea) {
            console.log(`¡Notificación! ${amigo.nombre} ahora está en línea.`);
        } else {
            console.log(`¡Notificación! ${amigo.nombre} ahora está fuera de línea.`);
        }
    });
}


setInterval(verificarEstadoAmigos, 5000); 

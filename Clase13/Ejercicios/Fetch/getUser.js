/*Ejercicio 7: Obtener Información de un Usuario por ID 
1. Crea un archivo getUser.js. 
2. Usando fetch, realiza una solicitud a la API de JSONPlaceholder para 
obtener la información de un usuario específico. 
3. Extrae y muestra en la consola el nombre, nombre de usuario y correo 
electrónico del usuario. 
Pistas: 
• La URL para buscar un usuario es 
https://jsonplaceholder.typicode.com/users/{id}. */

async function fetchUser(id){
    const api_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
    
    const response = await fetch(api_URL);
    
    if (!response.ok) throw new Error("Error al consultar la API de JSONPlaceholder .");
    
    const data = await response.json();
    
    if (!data) {
        console.log("No se encontro el ID del usuario.");
        return;
    }

    console.log("--Datos del usuario--");
    console.log(`Nombre: ${data.name}`);
    console.log(`Correo: ${data.email}`);

    
}

fetchUser(3)
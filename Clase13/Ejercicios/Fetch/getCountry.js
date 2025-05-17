/*Ejercicio 4: Obtener Información de un País por Nombre 
1. Crea un archivo getCountry.js. 
2. Escribe una función que reciba el nombre de un país como parámetro, 
realice una solicitud a la API de REST Countries, y devuelva el nombre, 
capital y región del país. 
3. Muestra estos datos en la consola. 
Pistas: 
• La URL para buscar un país es 
https://restcountries.com/v3.1/name/{name}. 
• La respuesta contiene un arreglo; accede al primer objeto con [0] para 
extraer la información. */

async function fetchCountry(nombrePais){
    try {
        const api_URL = `https://restcountries.com/v3.1/name/${nombrePais}`

        const response = await fetch(api_URL);

        if (!response.ok) throw new Error("Error al consultar la API de Rest Countries.");

        const data = await response.json();

        if (!data || data.length === 0) {
            console.log("No se encontro el País con ese nombre.");
            return;
        }

        
        const pais = data[0];
        console.log(`País: ${pais.name.common}`);
        console.log(`Nombre de la capital: ${pais.capital ? pais.capital[0] : "No disponible"}`);
        console.log(`Región: ${pais.region}`);
        

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
    
}
fetchCountry("mexico");
/*Ejercicio 3: Crear un Servicio de Búsqueda de Películas 
Descripción: 
1. Crea un archivo searchMovie.js. 
2. Escribe una función que reciba el título de una película como parámetro, 
realice una solicitud a la API de OMDb y devuelva el título y el año de 
lanzamiento de la primera película que coincida con la búsqueda. 
(Requiere clave de API gratuita). 
3. Llama a esta función pasando un título, y muestra el resultado en la 
consola. 
Pistas: 
• Usa fetch("https://www.omdbapi.com/?s=" + titulo + 
"&apikey=TU_API_KEY") para realizar la solicitud. 
• La respuesta contiene una lista de películas en Search; accede a la primera 
película con Search[0]. */

async function fetchMovie(titulo){
    try {
        const apiKey = "bbd81c82"; 
        const url = `https://www.omdbapi.com/?s=${encodeURIComponent(titulo)}&apikey=${apiKey}`;
        
        const response = await fetch(url);

        if (!response.ok) throw new Error("Error al consultar la API de OMDb.");

        const data = await response.json();

        
        if (!data.Search || data.Search.length === 0) {
            console.log("No se encontraron películas con ese título.");
            return;
        }

        
        const primeraPelicula = data.Search[0];
        console.log(`Película encontrada: ${primeraPelicula.Title} (${primeraPelicula.Year})`);

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
fetchMovie("Inception")


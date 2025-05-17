/*Ejercicio 6: Buscar Canción por Título 
1. Crea un archivo searchSong.js. 
2. Escribe una función que reciba el título de una canción y realice una 
solicitud a la API de iTunes para buscar la canción. 
3. Muestra en la consola el nombre de la canción y el artista. 
Pistas: 
• La URL de búsqueda es 
https://itunes.apple.com/search?term={song_title}&limit=1. 
• La información de la canción se encuentra en el primer resultado del 
arreglo de resultados. */

async function fetchSong(cancion){
    const api_URL = `https://itunes.apple.com/search?term=${encodeURIComponent(cancion)}&limit=1`;
    
    const response = await fetch(api_URL);
    
    if (!response.ok) throw new Error("Error al consultar la API de iTunes .");
    
    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
        console.log("No se encontro el título de la canción con ese nombre.");
        return;
    }
    const cancionDetalles = data.results[0];
    console.log(`Información de la canción ${cancion}: Artista-${cancionDetalles.artistName}`);
    
}

fetchSong("Shape of You");
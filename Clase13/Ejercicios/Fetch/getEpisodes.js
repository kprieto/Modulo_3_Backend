/*Ejercicio 8: Lista de Episodios de una Serie 
1. Crea un archivo getEpisodes.js. 
2. Realiza una solicitud a la API de TVMaze para obtener la lista de episodios 
de una serie específica (puedes usar el nombre “Friends” como ejemplo). 
3. Muestra en la consola los nombres de los episodios y sus números de 
temporada. 
Pistas: 
• La URL para obtener episodios es 
https://api.tvmaze.com/singlesearch/shows?q=nombre_de_la_serie&embe
 d=episodes. 
• Los episodios están dentro de _embedded.episodes.*/

async function fetchEpisodes(serie){
    const api_URL = `https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(serie)}&embed=episodes`;
    
    const response = await fetch(api_URL);
    
    if (!response.ok) throw new Error("Error al consultar la API de TVMaze .");
    
    const data = await response.json();
    
    if (!data._embedded || !data._embedded.episodes || data._embedded.episodes.length === 0) {
        console.log("No se encontraron episodios para la serie ingresada.");
        return;
    }

    console.log("--Datos de la serie--");
    console.log(`Serie: ${serie}`);
    const episodios = data._embedded.episodes.forEach(episodio => {
            console.log(`Temporada ${episodio.season}, Episodio ${episodio.number}: ${episodio.name}`);
        });
    
}
fetchEpisodes("911");
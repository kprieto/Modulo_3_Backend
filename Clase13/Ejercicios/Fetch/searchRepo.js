/*Ejercicio 9: Buscar GitHub Repositorios por Término 
1. Crea un archivo searchRepo.js. 
2. Escribe una función que reciba un término de búsqueda y realice una 
solicitud a la API de GitHub para obtener repositorios que coincidan con 
el término. 
3. Muestra en la consola el nombre del repositorio y la descripción de los 
primeros cinco resultados. 
Pistas: 
• La URL de búsqueda es 
https://api.github.com/search/repositories?q={query}&per_page=5. */

async function fetchRepositorios(termino){
    const api_URL = `https://api.github.com/search/repositories?q=${termino}&per_page=5`;
    
    const response = await fetch(api_URL);
    
    if (!response.ok) throw new Error("Error al consultar la API de GitHub .");
    
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
        console.log("No se encontraron repositorios con ese término.");
        return;
    }

    console.log(`Repositorios encontrados para: "${termino}"`);
    data.items.forEach(repo => {
        console.log(`Nombre: ${repo.name}`);
        console.log(`Descripción: ${repo.description || "Sin descripción"}`);
        console.log(`URL: ${repo.html_url}`);
        console.log("------------------------------");
    });
}
fetchRepositorios("javaScript");
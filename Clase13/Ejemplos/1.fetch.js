// paso 1 definimos una funcion asincrona que recibe un parametro id
async function fetchChracter(id){
    // bloque try
    try{
        // validamos que el id no fue ingresado
        if(!id) throw new Error('No ingresaste el ID')
        // Hacemos una solicitud a la api de star wars
        const response = await fetch(`https://rickandmortyapi.com/api/character${id}/`);
        // verificamos si la respuesta no fue exitosa (status diferente a 200) lanzamos un  error
        if (!response.ok) throw new Error (`El personaje no fue encontrado: ${response.status}`)
        
        // convertimos la respuesta a formato json para obtener los datos del personaje
        const character = await response.json();

        //imprimos los datos del personaje
        console.log('Datos del personaje: ', character);

        
        
    }catch (error){
        console.error('Error: ', error.message)
    }
}

fetchChracter(2);

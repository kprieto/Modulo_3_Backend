/*Ejercicio 5: Información Meteorológica por Ciudad 
1. Crea un archivo getWeather.js. 
2. Escribe una función que reciba el nombre de una ciudad y realice una 
solicitud a la API de OpenWeatherMap para obtener el clima actual de esa 
ciudad (requiere clave de API gratuita). 
3. Extrae y muestra en la consola la temperatura y la descripción del clima. 
Pistas: 
• Usa fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
ciudad + "&appid=TU_API_KEY"). 
• La temperatura está en main.temp y la descripción en 
weather[0].description.*/

async function fetchWeather(ciudad){
       try {
            const API_KEY = "0fb95552402e3a2abd8056fea26ff42f";
            const api_URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${API_KEY}&units=metric`;
    
            const response = await fetch(api_URL);
    
            if (!response.ok) throw new Error("Error al consultar la API de OpenWeatherMap .");
    
            const data = await response.json();
    
            if (!data || data.length === 0) {
                console.log("No se encontro la ciudad con ese nombre.");
                return;
            }
    
            
            const temperatura = data.main.temp;
            const descripcion = data.weather[0].description;
            console.log(`Ciudad: ${ciudad}`)
            console.log(`Temperatura: ${temperatura}`);
            console.log(`Descripción: ${descripcion}`);

        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
}
fetchWeather("mexico")
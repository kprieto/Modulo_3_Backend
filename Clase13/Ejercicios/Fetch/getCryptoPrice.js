/*Ejercicio 10: Obtener Precio de Criptomoneda 
1. Crea un archivo getCryptoPrice.js. 
2. Escribe una función que reciba el símbolo de una criptomoneda (como 
"BTC" para Bitcoin) y realice una solicitud a la API de CoinGecko para 
obtener el precio actual. 
3. Muestra en la consola el nombre de la criptomoneda y su precio en 
dólares. 
Pistas: 
• La URL para obtener el precio es 
https://api.coingecko.com/api/v3/simple/price?ids={crypto_id}&vs_currenc
 ies=usd. 
• Usa el id de la criptomoneda en minúsculas (por ejemplo, bitcoin para 
BTC). */

async function fetchCriptomoneda(simbolo){
    const cryptoId = simbolo.toLowerCase();
    const api_URL = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`;
    
    const response = await fetch(api_URL);
    
    if (!response.ok) throw new Error("Error al consultar la API de CoinGecko .");
    
    const data = await response.json();
    
        
    if (!data[cryptoId] || !data[cryptoId].usd) {
        console.log("No se encontró información para la criptomoneda ingresada.");
        return;
    }

    console.log(`Criptomoneda: ${cryptoId}`);
    console.log(`Precio en USD: $${data[cryptoId].usd}`);

}
fetchCriptomoneda("bitcoin");
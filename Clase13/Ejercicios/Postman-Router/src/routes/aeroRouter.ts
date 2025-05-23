/*Ejercicio 4. Consulta de Aeropuertos (GET) 
Objetivo: Realizar una solicitud GET para obtener todos los aeropuertos. 
• API: AirportGap API 
• URL: https://airportgap.com/api/airports 
• Método: GET 
• Descripción: Realiza una solicitud GET para obtener todos los aeropuertos 
disponibles. Consulta la respuesta y muestra la lista de aeropuertos en la 
consola. 
Pistas: 
• Asegúrate de seleccionar el método GET en Postman y de no olvidar que 
la respuesta será un array en formato JSON. */
import express, { Request, Response, Router } from "express";
const router: Router = express.Router();

const API_URL = "https://airportgap.com/api/airports";

interface AirportData {
    airports?: { iata: string; name: string }[];
}

async function fetchAeropuerto(req: Request, res: Response): Promise<void> {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error("Error al consultar la API de AirportGap.");

        const data: AirportData = await response.json();

        if (!data) {
            res.status(404).json({ error: "No se encontraron aeropuertos." });
            return;
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}


router.get("/airports", fetchAeropuerto);

export default router;
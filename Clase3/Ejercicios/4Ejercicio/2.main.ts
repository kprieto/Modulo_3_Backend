/*Actividad 4: Tipos de Exportaciones 
Crea un archivo llamado constants.ts que contenga: 
• Una constante PI con el valor de π. 
• Una constante E con el valor de e. 
Exporta ambas constantes usando: 
• Exportación directa. 
• Exportación separada. 
Luego, en main.ts, importa ambas constantes y muestra sus valores en la 
consola*/
import { 
    PI,
    PI_NAME,
    E,
    E_NAME } from "./1.constants";

console.log(`El valor de ${PI_NAME} es: ${PI}`);
console.log(`El valor de ${E_NAME} es: ${E}`);
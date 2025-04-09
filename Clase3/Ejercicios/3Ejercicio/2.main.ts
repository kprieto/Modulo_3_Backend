/*Actividad 3: Exportación por Defecto 
Crea un módulo llamado user.ts que contenga una función: 
• createUser(name: string, age: number): devuelve un objeto con name y 
age. 
Exporta la función como exportación por defecto. En main.ts, importa 
createUser, crea un usuario y muestra su información en la consola. */

import createUser, {User} from "./1.user";

let usuario : User = createUser("Karen", 30);

console.log("Información del usuario:");
console.log(usuario);
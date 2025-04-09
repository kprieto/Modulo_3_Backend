import createUser from "../3Ejercicio/1.user";
import { add, subtract, capitalize, reverse, User } from "./utils/index";

const usuario: User = createUser("karen", 30);


const nombreCapitalizado = capitalize(usuario.name);
const nombreInvertido = reverse(usuario.name);
console.log(`Nombre original: ${usuario.name}`);
console.log(`Nombre capitalizado: ${nombreCapitalizado}`);
console.log(`Nombre invertido: ${nombreInvertido}`);


const suma = add(10, 20);
const resta = subtract(10, 2);
console.log(`La suma de 10 y 20 es: ${suma}`);
console.log(`La resta de 10 y 2 es: ${resta}`);
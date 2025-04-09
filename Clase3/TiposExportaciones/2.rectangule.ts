// declaramos primero las funciones y constantes
// y luego las exportamos al final del archivo utilizando la exportacion separada
const calculateRentangleArea =(width: number, height: number): number =>{
    return width * height;
}

const RENTANGLE_NAME = "Rectangle"

export {calculateRentangleArea, RENTANGLE_NAME}
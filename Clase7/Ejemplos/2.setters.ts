// Definimos una clase Triangulo
class Triangle{
    private _base: number;
    private _height: number;

    constructor() { // constructor
        this._base = 0;
        this._height = 0;
    }

    //Settter para la base, con validación de numeros
    public set base(value: number) {
        if (value >= 0) {
            this._base = value;
        }
        else {
            console.log("La base debe ser mayor a 0.");
        }
    }

    // Setter para la altura, con validación de numeros
    public set height(value: number) {
        if (value >= 0) {
            this._height = value;
        }
        else {
            console.log("La altura debe ser mayor a 0.");
        }
    }

    // Metodo para calcular el área del triángulo
    public calculateArea(): number {
        return (this._base * this._height) / 2;
    }
}

// Usamos la clase Triangulo
const triangulo = new Triangle();

//Usamos setter para establecer nuevos valores
triangulo.base = 10; // Establecemos la base
triangulo.height = 5; // Establecemos la altura

//Calculamos el área
console.log(`El área del triángulo es: ${triangulo.calculateArea()}`); 

// Probamos con numero no validos
triangulo.base = -10;
triangulo.height = -5;
console.log(`El área del triángulo es: ${triangulo.calculateArea()}`); 

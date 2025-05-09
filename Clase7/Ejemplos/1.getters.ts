// Definimos un objeto
class Rectangle{
    private _width: number; // propiedad privada 1
    private _height: number; // propiedad privada 2

    constructor(width: number, height: number) { // constructor
        this._width = width; // inicializamos la propiedad privada 1
        this._height = height; // inicializamos la propiedad privada 2
    }
    
    // Getter para el area del rectángulo
    public get area(): number {
        return this._width * this._height; // devolver el area calculada
    }

    // Getter para obtener la altura
    public get height(): number {
        return this._height; // devolver la altura
    }

    // Getter para obtener el ancho del rectángulo
    public get width(): number {
        return this._width; // devolver el ancho
    }
}

// Usamos la clase rectangle
const rectangulo = new Rectangle(10, 5);
console.log(rectangulo);

// Accedemos a los valores usuando los getters
console.log(`El ancho del rectángulo es: ${rectangulo.width}`);
console.log(`La altura del rectángulo es: ${rectangulo.height}`);
console.log(`El área del rectángulo es: ${rectangulo.area}`); 
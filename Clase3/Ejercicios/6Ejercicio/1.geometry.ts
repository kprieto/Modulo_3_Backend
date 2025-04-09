export namespace Geometry {

    export function areaOfCircle(radius: number): number {
        return Math.PI * Math.pow(radius, 2); 
    }
    
    export function areaOfSquare(side: number): number {
        return side * side; 
    }
}
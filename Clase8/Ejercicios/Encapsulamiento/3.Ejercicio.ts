/*9. Ejercicio de Playlist 
Diseña una clase Playlist que contenga propiedades privadas para nombre y 
canciones (un array de títulos de canciones). Implementa métodos para agregar 
canciones, eliminar canciones y listar todas las canciones en la playlist. 
Asegúrate de que se imprima un mensaje si se intenta agregar una canción 
vacía o eliminar una canción que no existe. */

class Playlist {
    private nombre: string;
    private canciones: string[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.canciones = [];
    }

    public set agregarCancion(cancion: string) {
        if (cancion.trim() === "") {
            console.log("No se puede agregar una canción vacía.");
        } else {
            this.canciones.push(cancion);
            console.log(`Canción "${cancion}" agregada a la playlist "${this.nombre}".`);
        }
    }

    public set eliminarCancion(cancion: string) {
        const index = this.canciones.indexOf(cancion);
        if (index === -1) {
            console.log(`La canción "${cancion}" no existe en la playlist "${this.nombre}".`);
        } else {
            this.canciones.splice(index, 1);
            console.log(`Canción "${cancion}" eliminada de la playlist "${this.nombre}".`);
        }
    }

    public listarCanciones(): void {
        if (this.canciones.length === 0) {
            console.log(`La playlist "${this.nombre}" está vacía.`);
        } else {
            console.log(`Playlist "${this.nombre}":`);
            this.canciones.forEach((cancion, index) => {
                console.log(`${index + 1}. ${cancion}`);
            });
        }
    }
}
const miPlaylist = new Playlist("Mis Canciones Favoritas");
miPlaylist.agregarCancion = "Despacito";    
miPlaylist.agregarCancion = "Shape of You";
miPlaylist.agregarCancion = "Flowers"; 
miPlaylist.agregarCancion = "";
miPlaylist.listarCanciones(); 
miPlaylist.eliminarCancion = "Shape of You"; 
miPlaylist.eliminarCancion = "Only You";
miPlaylist.listarCanciones(); 
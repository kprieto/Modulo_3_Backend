import fs, { readFileSync } from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../database/books.json')
// definimos la ruta al archivo json que actua con bd de los libros

interface Book{
    id: string;
    title: string;
    author: string;
    genre: string;
    year: number;

}

export class BooksModel {
    static getAllBooks(): Book[]{
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        // lee el contenido del archivo json y lo convierta a js
        return data.books;
    }

    static getBooksById(id:string): Book | undefined{
        const data = this.getAllBooks();
        // obtenga todas las frases
        return data.find((book) => book.id === id)
        //busque y devuelva el libro cuyo id coincide con el que le pasamos

    }

    static getBooksByAuthor(author:string): Book[]{
        const data = this.getAllBooks();
        // obtenga todos los libros
        return data.filter((book) => book.author.toLowerCase() === author.toLowerCase());
        //busque y devuelva el libro cuyo autor coincidan con el que le pasamos

    }

    static createBooks(newBook: Book): Book {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        const newID = (data.books.length + 1).toString()
        //genera un nuevo id tomando en cuenta la longitud del array
        const book ={...newBook, id: newID}
        //crea un libro nuevo agregando el id que generamos

        data.books.push(book)
        // agrego el libro al array
        data.info.total +=1
        //incremento el contador
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        //guardamos los datos actualizados en el json
        return book;
        //devuelve el libro
    }

    static updateBooks(id: string, updateData: Partial<Book>): Book | null {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        // lee el contenido del archivo json y lo convierte a js
        const index = data.books.findIndex((book:Book) => book.id === id)
        // encuentra el indice del libro que coincide con el id
        if (index === -1) return null
            data.books[index]= {...data.books[index], ...updateData}
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
            return data.books[index]
    }

    static deleteBooks(id: string): boolean {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        // lee el contenido del archivo json y lo convierte a js
        const index = data.books.findIndex((book:Book) => book.id === id)
        // encuentra el indice del libro que coincida con el id
        if (index === -1) return false
            data.books.splice(index, 1)
            data.info.total -=1
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
            return true

    }
}
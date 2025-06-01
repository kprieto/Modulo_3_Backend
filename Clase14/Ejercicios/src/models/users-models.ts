import fs, { readFileSync } from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../database/users.json')
// definimos la ruta al archivo json que actua con bd de los libros

interface User{
    id: number;
    name: string;
    email: string;
    age: number;
    country: string;

}

export class UsersModel {
    static getAllUsers(): User[]{
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        // lee el contenido del archivo json y lo convierta a js
        return data.users;
    }

    static getUsersById(id:number): User | undefined{
        const data = this.getAllUsers();
        // obtenga todas las frases
        return data.find((user) => user.id === id)
        //busque y devuelva el usuario cuyo id coincide con el que le pasamos

    }

    static getUsersByName(name:string): User[]{
        const data = this.getAllUsers();
        // obtenga todos los libros
        return data.filter((user) => user.name.toLowerCase() === name.toLowerCase());
        //busque y devuelva el usuario cuyo autor coincidan con el que le pasamos

    }

    static createUsers(newUser: User): User {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        const newID = data.users.length + 1;
        //genera un nuevo id tomando en cuenta la longitud del array
        const user ={...newUser, id: newID}
        //crea un libro nuevo agregando el id que generamos

        data.users.push(user)
        // agrego el libro al array
        data.info.total +=1
        //incremento el contador
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        //guardamos los datos actualizados en el json
        return user;
        //devuelve el libro
    }

    static updateUsers(id: number, updateData: Partial<User>): User | null {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        // lee el contenido del archivo json y lo convierte a js
        const index = data.users.findIndex((user:User) => user.id === id)
        // encuentra el indice del usuario que coincide con el id
        if (index === -1) return null
            data.users[index]= {...data.users[index], ...updateData}
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
            return data.users[index]
    }

    static deleteUsers(id: number): boolean {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        // lee el contenido del archivo json y lo convierte a js
        const index = data.users.findIndex((user:User) => user.id === id)
        // encuentra el indice del usuario que coincida con el id
        if (index === -1) return false
            data.users.splice(index, 1)
            data.info.total -=1
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
            return true

    }

    static countUsersDominio(dominio: string): number {
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        
        // Definir el tipo de usuario dentro del filtro
        const count = data.users.filter((user: { email: string }) => user.email.endsWith(`@${dominio}`)).length;

        return count;
    }

    static saveUsers(data: any): void {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }

    static addUsers(newUsers: User[]): User[] {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

        // Validar cada usuario en la lista
        const invalidUsers = newUsers.filter(user => !user.name || !user.email);
        if (invalidUsers.length > 0) {
            throw new Error(`Algunos usuarios tienen datos inválidos: ${JSON.stringify(invalidUsers)}`);
        }

        // Asignar ID único y agregar los usuarios a la lista
        newUsers.forEach(user => {
            user.id = data.users.length + 1;
            data.users.push(user);
        });

        // Actualizar el contador total
        data.info.total = data.users.length;

        // Guardar datos actualizados en el JSON
        this.saveUsers(data);

        return newUsers;
    }

    static getUsersSorted(order: string = "asc"): User[] {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))


        return data.users.sort((a: User, b: User) => {
            if (order === "desc") {
                return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
            } else {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            }
        });
    }

    static getUsersByAgeRange(minAge: number, maxAge: number): User[] {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

        return data.users.filter((user: User) => user.age >= minAge && user.age <= maxAge);
    }

    static getUsersStats(): any {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

        const users = data.users;

        if (users.length === 0) {
            return { totalUsers: 0, averageAge: 0, youngestUser: null, oldestUser: null };
        }

        const totalUsers = data.info.total;
        const averageAge = users.reduce((sum: number, user: User) => sum + user.age, 0) / totalUsers;
        const youngestUser = users.reduce((min: User, user: User) => (user.age < min.age ? user : min));
        const oldestUser = users.reduce((max: User, user: User) => (user.age > max.age ? user : max));

        return { totalUsers, averageAge, youngestUser, oldestUser };
    }
}
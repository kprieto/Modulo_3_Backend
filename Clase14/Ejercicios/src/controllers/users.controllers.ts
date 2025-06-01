import {Request, Response} from "express";

import {UsersModel} from '../models/users-models';

//Controlador para obtener todos los usuarios
export const getAllUsers= (req: Request, res: Response): void =>{
    const users = UsersModel.getAllUsers();
    res.json(users);
}

// controlador para usuarios por id
export const getUsersById = (req: Request, res: Response): void =>{
    const id= parseInt(req.params.id,10);
    // extraemos el parametro id de la soli
    const user = UsersModel.getUsersById(id)
    // llamamos al metodo del modelo para buscar el usuario por id
    if(!user){
        res.status(404).json({error: "Usuario no encontrado"})
        return
    }

    res.json(user)
}


// controlador para usuarios por nombre
export const getUsersByName = (req: Request, res: Response): void =>{
    const {name}= req.params;
    if (!name || typeof name !== "string") {
        res.json([]);
        return  // Si no se envía un nombre, devuelve un arreglo vacío
    }
    // extraemos el parametro nombre de la soli
    const user = UsersModel.getUsersByName(name)
    // llamamos al metodo del modelo para buscar el usuario por nombre
    if(!user){
        res.status(404).json({error: "Usuario no encontrado"})
        return
    }

    res.json(user)
}

export const createUsers = (req: Request, res: Response): void =>{
    const newUser = UsersModel.createUsers(req.body);
    // llamemos al metodo del modulo para agregar un nuevo usuario con los datos de la soli
    res.status(201).json(newUser)
}

export const updateUsers = (req: Request, res: Response): void =>{
    const id= parseInt(req.params.id,10);


    const updateUser = UsersModel.updateUsers(id, req.body);
    if (!updateUser) {
        res.status(404).json({ error: `Usuario con ID ${id} no encontrado.` });
        return;
    }
    res.status(200).json({message: "Usuario actualizado exitosamente.",updateUser})
}



export const deleteUsers = (req: Request, res: Response): void =>{
    const id= parseInt(req.params.id,10);
    // extraemos el parametro id de la soli
    const isDeleted = UsersModel.deleteUsers(id);
    if (!isDeleted) {
        res.status(404).json({error: "Usuario no encontrado para ser borrado"})
        return
    }
    res.status(200).json({message: "Usuario eliminado exitosamente."});
}

export const countUsersDominio = (req: Request, res: Response): void =>{
    const { domain } = req.query;

    // Validar que se proporcionó un dominio
    if (!domain || typeof domain !== "string") {
        res.status(400).json({ error: "Debes proporcionar un dominio en el parámetro 'domain'." });
        return 
    }

    // Contar usuarios con el dominio específico en su email
    const count = UsersModel.countUsersDominio(domain);

    res.json({ domain, count });

}

export const addUsers = (req: Request, res: Response): void => {

        const newUsers = req.body;

        // Validar que el cuerpo de la solicitud es un array
        if (!Array.isArray(newUsers)) {
            res.status(400).json({ error: "El cuerpo de la solicitud debe ser un arreglo de usuarios." });
            return;
        }

        const addedUsers = UsersModel.addUsers(newUsers);
        res.status(201).json({ message: "Usuarios agregados exitosamente.", addedUsers });

};

export const getUsersSorted = (req: Request, res: Response): void => {
    const order = req.query.order === "desc" ? "desc" : "asc"; // Definir el orden, por defecto "asc"

    const sortedUsers = UsersModel.getUsersSorted(order);

    res.json({ order, sortedUsers });
};

export const getUsersByAgeRange = (req: Request, res: Response): void => {
    const minAge = parseInt(req.query.minAge as string, 10);
    const maxAge = parseInt(req.query.maxAge as string, 10);

    // Validar que ambos parámetros sean proporcionados y sean números válidos
    if (isNaN(minAge) || isNaN(maxAge)) {
        res.status(400).json({ error: "Debes proporcionar valores numéricos en los parámetros 'minAge' y 'maxAge'." });
        return;
    }

    const users = UsersModel.getUsersByAgeRange(minAge, maxAge);

    res.json(users);
};

export const getUsersStats = (req: Request, res: Response): void => {
    const stats = UsersModel.getUsersStats();
    res.json(stats);
};

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getExternalUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Error al obtener usuarios externos: ${response.statusText}`);
        }

        const users = await response.json();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const searchExternalUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.query;

        // Validar que se proporcionó un nombre
        if (!name || typeof name !== "string") {
            res.status(400).json({ error: "❌ Debes proporcionar un nombre válido en el parámetro 'name'." });
            return;
        }

        // Obtener usuarios de la API externa
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Error al obtener usuarios externos: ${response.statusText}`);
        }

        const users = await response.json();

        // Buscar el usuario por nombre exacto
        const user = users.find((u: { name: string }) => u.name === name);

        if (!user) {
            res.status(404).json({ error: `No se encontró un usuario con el nombre '${name}'.` });
            return;
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
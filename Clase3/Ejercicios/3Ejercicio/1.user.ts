export type User={
    name:string;
    age: number;
}

export default function createUser(name: string, age: number): User {
    return { name, age };
}
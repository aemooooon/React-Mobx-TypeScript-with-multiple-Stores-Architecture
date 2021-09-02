import { User } from "../user";

export const getUsers = async (): Promise<User[]> => {
    return await fetch('https://fakestoreapi.com/users').then(res => res.json());
}
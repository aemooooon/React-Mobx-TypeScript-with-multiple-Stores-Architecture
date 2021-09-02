import { UserProp } from "../user";

export const getUsers = async (): Promise<UserProp[]> => {
    return await fetch('https://fakestoreapi.com/users').then(res => res.json());
}
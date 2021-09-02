import { makeAutoObservable, observable, action, runInAction } from 'mobx';
import { getUsers } from '../api/userApi';

export interface Name {
    firstname: string;
    lastname: string;
}

export interface Geolocation {
    lat: string;
    long: string;
}

export interface Address {
    geolocation: Geolocation;
    city: string;
    street: string;
    number: number;
    zipcode: string;
}

export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    phone: string;
    name: Name;
    address: Address;
}

export class UserStore {
    users: User[] = [];
    isLoading: boolean = true;

    constructor() {
        makeAutoObservable(this, {
            users: observable,
            loadUsers: action,
            addUser: action,
        });
    }

    loadUsers(): void {
        this.isLoading = true;
        getUsers().then((users: any) => {
            runInAction(() => {
                this.users = users;
                this.isLoading = false;
            })
        });
    }

    get len(): number {
        return this.users.length
    }

    addUser(user: User): void {
        this.users.push(user)
    }

}
import { makeAutoObservable } from 'mobx';
import { getUsers } from '../api/userApi';

type Name={
    firstname: string;
    lastname: string;
}

type Geolocation ={
    lat: string;
    long: string;
}

type Address={
    geolocation: Geolocation;
    city: string;
    street: string;
    number: number;
    zipcode: string;
}

export interface UserProp{
    id: number;
    email: string;
    username: string;
    password: string;
    phone: string;
    name: Name;
    address: Address;
}

class UserStore{
    users: UserProp[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    loadUsers(): void{
        getUsers().then((users:any) => this.users = users);
    }

}

export default UserStore;
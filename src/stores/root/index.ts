import { makeAutoObservable } from "mobx";
import ProductStore from "../product";
import UserStore from "../user";

interface RootStore{
    [key:string]:any;
}

class RootStore{
    productStore: ProductStore | null = null;
    userStore: UserStore | null = null;

    constructor(){
        makeAutoObservable(this);
        this.productStore = new ProductStore();
        this.userStore = new UserStore();
    }
}

export default RootStore;
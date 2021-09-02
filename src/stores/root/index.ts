import { makeAutoObservable } from "mobx";
import { ProductStore } from "../product";
import { UserStore } from "../user";

export default class RootStore {
    productStore: ProductStore;
    userStore: UserStore;

    constructor() {
        makeAutoObservable(this);
        this.productStore = new ProductStore();
        this.userStore = new UserStore();
    }
}
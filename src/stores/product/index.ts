import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import { getProducts } from '../api/productApi';

export interface Product {
    id: number
    title: string
    price: number
    description: string
    image: string
}

export class ProductStore {
    products: Product[] = [];
    isLoading: boolean = true;

    constructor() {
        makeAutoObservable(this, {
            products: observable,
            isLoading: observable,
            loadProducts: action,
        });
    }

    loadProducts(): void {
        this.isLoading = true
        getProducts().then((products: any) => {
            runInAction(() => {
                this.products = products;
                this.isLoading = false;
            })
        })
    }

    get len(): number {
        return this.products.length
    }

}
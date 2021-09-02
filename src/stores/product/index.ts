import { makeAutoObservable } from 'mobx';
import { getProducts } from '../api/productApi';

export interface ProductProp {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

interface ProductStore {
    [key: string]: any;
}

class ProductStore {
    products: ProductProp[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    loadProducts(): void {
        getProducts().then((products: any) => this.products = products)
    }

    get len(): number{
        return this.products.length
    }

}

export default ProductStore
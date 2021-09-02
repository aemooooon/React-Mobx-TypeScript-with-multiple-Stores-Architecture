import { Product } from "../product"

export const getProducts = async (): Promise<Product[]> => {
    return await fetch('https://fakestoreapi.com/products').then(res => res.json())
}
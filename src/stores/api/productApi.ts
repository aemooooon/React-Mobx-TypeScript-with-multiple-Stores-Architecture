import { ProductProp } from "../product"

export const getProducts = async (): Promise<ProductProp[]> => {
    return await fetch('https://fakestoreapi.com/products').then(res => res.json())
}
import { Product } from './product.model';
export const products: Product[] = [];



export const addProduct = (data: Product) => {
    data.createdAt = new Date(1999,0,1)
    products.push(data);
    
}
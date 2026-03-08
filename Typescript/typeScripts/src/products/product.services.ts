import type { Product } from './product.model.js'

export const products: Product[] = []

export const createdProduct = (data: Product) => {
    products.push(data);
}

export const calcStock = (): number => {
    let total : number = 0;

    products.forEach(item =>{
        total += item.stock
    })
    return total;
}

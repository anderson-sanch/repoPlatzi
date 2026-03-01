import { Product } from './product.model';
import { CreatedProductDTO } from './product.dto';
import { faker } from '@faker-js/faker'

export const products: Product[] = [];

export const addProduct = (data: CreatedProductDTO): Product => {
    const newProduct = {
        ...data,
        id: faker.string.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        }
    }
    products.push(newProduct);
    
    return newProduct;
}

export const updateProduct = (id: string, changes:Product) => {
     
}

export const deleteProduct = (id: string) => {
    
    
}

export const readProducsts = () => {

}
export const readProducstsById = (id: string) => {

}
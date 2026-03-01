import { Product } from './product.model';
import { CreatedProductDTO, FindProductDTO, UpdateProductDTO } from './product.dto';
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

export const updateProduct = (id: Product['id'], changes:UpdateProductDTO): Product => {
    const index = products.findIndex(item => item.id === id);
    const prevData = products[index];
    products[index] = {
        ...prevData,
        ...changes
    }
    return products[index];
    // aca lo que hacemos es que especificamos que el parametros que recibimos puede variar, para contemplar eso le decimos que recibiremos al typado que tenga el id dentro del producto, asi si cambiar con el tiempo no se rompera
}

export const deleteProduct = (id: string) => {
    
    
}

export const findProducts = (dto: FindProductDTO): Product[] => {
    

    return products;
}
export const readProductsById = (id: string) => {

}
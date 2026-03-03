import { Product } from './../models/prodcut.model';
import {Category} from './../models/category.model';
import { CreatedProductDTO, UpdateProductDTO } from './../dto/product.dto';
import { faker } from '@faker-js/faker'

export class ProductMemoryService {
    private products: Product[] = [];

    add(data: CreatedProductDTO): Product {
        const newProduct = {
            ...data,
            id: faker.string.uuid(),
            title: faker.commerce.productName(),
            slug: faker.helpers.slugify(faker.commerce.productName()),
            price: faker.commerce.price({ min: 100, max: 1000 }),
            description: faker.commerce.productDescription(),
            category: faker.string.uuid(),
            images:      string[];
            creationAt:  new Date();
            updatedAt:   new Date();

        }
        this.products.push(newProduct);
        return newProduct;
    }
}; 


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

export const readProductsById = (id: string) => {

}
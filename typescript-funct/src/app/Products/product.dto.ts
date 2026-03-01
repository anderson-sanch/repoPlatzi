import {Product} from './product.model'


// con omit expluyo de la base del obj lo que no necesito
export interface CreatedProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category' >{
    categoryId: string;
}

// con el pick incluyo del obj lo que si necesito
type example = Pick<Product, 'color' | 'description'>;
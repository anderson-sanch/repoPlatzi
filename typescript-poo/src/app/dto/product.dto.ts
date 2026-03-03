import {Product} from '../models/prodcut.model'
import { Category } from '../models/category.model';

export interface CreatedProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category' >{
    categoryId: Category['id']
}

export interface UpdateProductDTO extends Partial<CreatedProductDTO>{}

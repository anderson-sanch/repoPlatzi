import { Product } from '../models/product.model'
import { Category } from '../models/category.model';

export interface CreatedProductDTO extends Omit<Product, 'id' | 'creationAt' | 'updatedAt' | 'category'> {
    categoryId: Category['id']
}

export interface UpdateProductDTO extends Partial<CreatedProductDTO> { }

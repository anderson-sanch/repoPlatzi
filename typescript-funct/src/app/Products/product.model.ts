import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

export type Size = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
    readonly title: string;
    price: number;
    size?: Size;
    category: Category;
}

//estructura compleja
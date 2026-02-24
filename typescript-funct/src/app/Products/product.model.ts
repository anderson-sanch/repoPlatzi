import { Category } from '../categories/category.model';
export type Size = 'S' | 'M' | 'L' | 'XL';
export interface Product {
    id: number
    name: string;
    createdAt: Date;
    price: number;
    size: Size;
    category: Category;
}

//estructura compleja
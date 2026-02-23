export type Size = 'M' | 'L' | 'S';

export type Product = {
    title: string,
    price: number,
    stock: number,
    createdAt: Date,
    size?: Size
}
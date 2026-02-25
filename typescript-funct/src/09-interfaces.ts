//Las inerfaces nos permiten crear moldes de objetos, es decir, definir la estructura que deben tener los objetos que implementen esa interfaz.

//ejemplo de literal types y union types para un objeto

type Sizes = 'S' | 'M' | 'L' | 'XL';

type Product = {
    id: number,
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
}

const products: Product[] = [];

products.push({
    id: 1,
    title: 'Producto 1',
    createAt: new Date(2002, 0, 1),
    stock: 10,
    size: 'M'
})

//ejemplo de interfaces

interface Product2 {
    id: number,
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
}

const products2: Product2[] = [];

products2.push({
    id: 1,
    title: 'Producto 1',
    createAt: new Date(2005, 1, 10),
    stock: 10,
    size: 'M'
})

//esto es un interface, es un molde para crear objetos, es decir, define la estructura que deben tener los objetos que implementen esa interfaz, una diferencia con los type es que las interfaces pueden ser extendidas, es decir, podemos crear una nueva interfaz que herede las propiedades de otra interfaz, mientras que los type no pueden ser extendidos, aunque si pueden ser intersectados, ademas de que los interfaces siempre deben tener un cuerpo.

type Audit = {
    createdBy: string,
    updatedBy: string
}

type ProductWithAudit = Product & Audit;

const productWithAudit: ProductWithAudit = {
    id: 1,
    title: 'Producto 1',
    createAt: new Date(2002, 0, 1),
    stock: 10,
    size: 'M',
    createdBy: 'admin',
    updatedBy: 'user'
}

//esto es un type que se intersecta con otro type, es decir, se combinan las propiedades de ambos types para crear un nuevo type, en este caso se combinan las propiedades de Product y Audit para crear el type ProductWithAudit, esto es similar a la herencia en las interfaces, pero con los types no se puede extender una interfaz, sino que se pueden intersectar varios types para crear un nuevo type.

interface Audit1 {
    createdBy: string,
    updatedBy: string
}

interface ProductWithAudit1 extends Product2, Audit1 {
    price: number
}

const productWithAudit2: ProductWithAudit1 = {
    id: 1,
    title: 'Producto 1',
    createAt: new Date(2002, 0, 1),
    stock: 10,
    size: 'M',
    createdBy: 'admin',
    updatedBy: 'user',
    price: 99.99
}

const addProduct = (product: ProductWithAudit1) => {
    products.push(product);
}

const productPrueba1 = addProduct({
    id: 1,
    title: 'anderson',
    createAt: new Date(),
    stock: 5,
    size: 'M',
    createdBy: 'admin',
    updatedBy: 'admin',
    price: 99.99
});

console.log(products);

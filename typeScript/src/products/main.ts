import { createdProduct, calcStock, products } from './product.services.js'

createdProduct({
    title: 'string',
    price: 123,
    stock: 312,
    createdAt: new Date(2001, 1, 1),
})
createdProduct({
    title: 'string',
    price: 123,
    stock: 312,
    createdAt: new Date(2001, 1, 1),
    size: 'L'
})

const stockcalculado = calcStock();

console.log(stockcalculado, products);



import { createdProduct, products } from './products/product.services.js';
createdProduct({ title: 'product1', price: 1234, stock: 123, createdAt: new Date(2001, 1, 3) });
console.log(products);
// en esta clase pudimos ver que ademas de usar obj en funciones podemos crear tipos basados en obj para poder dar un orden a lo que se le debe entregar a la funcion 

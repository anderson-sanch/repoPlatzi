import { addProduct, products } from './Products/product.service';

const product1 = addProduct({
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: 'Product 1',
    price: 100,
    size: 'M',
    category: {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Category 1'
    }
});

console.log(products);




//readonly 
//
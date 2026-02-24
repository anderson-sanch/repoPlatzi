import { addProduct } from './Products/product.service';

addProduct({
    id: 1,
    name: 'Product 1',
    createdAt: new Date(),
    price: 100,
    size: 'M',
    category: {
        id: 1,
        name: 'Category 1'
    }
});


import { faker } from '@faker-js/faker'
import { addProduct, products } from './Products/product.service';

for (let i = 0; i < 50; i++) {
    addProduct({
        title: faker.commerce.product(),
        stock: faker.number.int({ min: 1, max: 39 }),
        color: faker.color.rgb(),
        isNew: faker.datatype.boolean(),
        description: faker.commerce.productDescription(),
        imagen: faker.image.url(),
        tags: faker.word.words({ count: faker.number.int({ min: 2, max: 5 }) }).split(' '),
        price: parseInt(faker.commerce.price()),
        size: faker.helpers.arrayElement(['S','M','L','XL']),
        categoryId: faker.string.uuid()
    });
}

console.log(products);




//readonly 
//los readonly son una flag que permite no modificar o otorga dato por defecto esos datos cuando son extendidos

// Utility types
import {ProductMemoryService} from './service/product.service';

const productService = new ProductMemoryService();

productService.create({
    title: 'Product 1',
    slug: 'product-1',
    price: 100,
    description: 'Description of product 1',
    images: [],
    categoryId: 1
    });

    const products = productService.getAllProducts();
    const firtProduct = products[0].id;

    productService.updateProduct(firtProduct, {
        title: 'Product 1 updated',
        price: 200
    });

    const rta = productService.readProductsById(firtProduct);
    console.log(rta);
    
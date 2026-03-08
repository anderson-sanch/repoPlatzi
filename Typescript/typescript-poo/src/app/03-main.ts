import { ProductHttpService } from './service/product-http-service';

( async () => {
    
    const productService = new ProductHttpService();
    
    console.log('---'.repeat(10));
    
    const products = await productService.getAllProducts();
    console.log(products.map(item => item.title));

    const productId = products[0].id;
    await productService.updateProduct(productId, {
        title: 'Nuevo titulo',
        price: 1000,
        slug: 'nuevo-titulo anderson',
        images: ['https://placeimg.com/640/480/any'],
    });

    console.log('rrrr'.repeat(10));
    
    const product = await productService.readProductsById(productId);
    console.log(product);
    

})();


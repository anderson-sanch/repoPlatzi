import axios from 'axios';

(async () => {

    
    function delay (time: number){
        const promise = new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('Hello world');
            }, time);
        })
        return promise;
    }

    function getProducts () {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products');
        return promise
    }

    async function getProductsAsync () {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        return rta.data
    }



    // console.log('---'.repeat(3));
    
    // const rta = await delay(3000);

    // console.log(rta.toUpperCase());

    const products = await getProducts();
    console.log(products);

    const productsAsync = await getProductsAsync();
    console.log(productsAsync);
    
})();

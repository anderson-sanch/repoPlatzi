import axios from 'axios';

import { Product } from './models/prodcut.model';
let anyvar : any = 12;
let boolvar : boolean = anyvar;

(async () => {

    // tipado de respuesta http, puede ser en la respuesta de la funcion o en el get, pero es recomendable hacerlo en el get para tener una mejor experiencia de desarrollo, ya que nos permite hacer logica de negocio dentro de la funcion, y no tener que esperar a que se resuelva la promesa para saber el tipo de dato que estamos recibiendo.
    async function getProducts (): Promise<Product[]> {
        const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        // con el tipado en get podemos hacer logica de negocio dentro de la funcion
        return data;
    }
    async function getProducts2 () {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        
        // tipado forzado, no recomendado
        const data = rta.data as Product[]; // con el as podemos decirle a typescript que tipo de dato es, aunque no es recomendable usarlo, ya que puede generar errores de tipado.
        return data;
    }


    const products = await getProducts();
    console.log(products.map(item => `${item.id} - ${item.title}`));
    
    // en esta clase pudimos ver como podemos tipar la respuesta http, y como podemos usar interfaces para tipar objetos, ademas de usar el tipo any para evitar errores de tipado, aunque no es recomendable usarlo.
})();

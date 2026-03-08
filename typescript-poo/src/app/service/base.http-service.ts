import axios from 'axios';
import {Category} from './../models/category.model'
import {Product} from './../models/product.model'

export class baseHttpService<TypeClass> {
    // private data: TypeClass[] = [];

    constructor(private url: string){}

    async getAllProducts() {
        const {data} = await axios.get<TypeClass[]>(this.url);
        return data; 
    }
}

// const service = new baseHttpService<Category>();
// service.getAll();


(async() => {
    
    const url1:string = 'https://api.escuelajs.co/api/v1/products'
    const serviceProduct = new baseHttpService<Product>(url1)
    const rta = await serviceProduct.getAllProducts()
    console.log(rta);
    

})()
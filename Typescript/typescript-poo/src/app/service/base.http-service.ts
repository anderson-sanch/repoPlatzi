import axios from 'axios';
import {Category} from './../models/category.model'
import {Product} from './../models/product.model'
import { UpdateProductDTO } from '../dto/product.dto';

export class baseHttpService<TypeClass> {
    // private data: TypeClass[] = [];

    constructor(private url: string){}

    async getAllProducts() {
        const {data} = await axios.get<TypeClass[]>(this.url);
        return data; 
    }

    async updateProduct<ID, DTO>(id: ID, changes: DTO) {
        const {data} = await axios.put<DTO>(`${this.url}/${id}`, changes);
        return data;
    }

    async readProductsById<ID>(id:ID) {
        const {data} = await axios.get<Product>(`${this.url}/${id}`);
        return data;
    }
}

// const service = new baseHttpService<Category>();
// service.getAll();


(async() => {
    
    const url1:string = 'https://api.escuelajs.co/api/v1/products'
    const serviceProduct = new baseHttpService<Product>(url1)
    const rta = await serviceProduct.getAllProducts()
    serviceProduct.updateProduct<Product['id'],UpdateProductDTO >(1, {title : 'Anderson'})
    // console.log(rta);

    const result = await serviceProduct.readProductsById<Product['id']>(1)
    console.log(result);

})()
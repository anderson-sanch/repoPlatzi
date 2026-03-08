import { UpdateProductDTO, CreatedProductDTO } from '../dto/product.dto';
import { ProductService } from '../models/product-service-model';
import { Product } from '../models/product.model';
import axios from 'axios';

export class ProductHttpService implements ProductService {

    private url = 'https://api.escuelajs.co/api/v1/products';

    async getAllProducts() {
        const {data} = await axios.get<Product[]>(this.url);
        return data; 
    }

    async updateProduct(id: Product['id'], changes: UpdateProductDTO) {
        const {data} = await axios.put<Product>(`${this.url}/${id}`, changes);
        return data;
    }

    async create(dto: CreatedProductDTO) {
        const {data} = await axios.post(this.url, dto);
        return data;
    }

    async readProductsById(id: Product['id']) {
        const {data} = await axios.get<Product>(`${this.url}/${id}`);
        return data;
    }
    
}
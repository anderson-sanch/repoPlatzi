import { CreatedProductDTO, UpdateProductDTO } from "../dto/product.dto";
import { Product } from "./product.model";

export interface ProductService {
    getAllProducts(): Promise<Product[]> | Product[];
    updateProduct(id:Product['id'] , changes: UpdateProductDTO): Product | Promise<Product>;
    create(dto: CreatedProductDTO): Product | Promise<Product>;
    readProductsById(id: Product['id']):Product | undefined | Promise<Product | undefined>;
}
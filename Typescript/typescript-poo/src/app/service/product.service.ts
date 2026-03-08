import { Product } from '../models/product.model';
import { Category } from './../models/category.model';
import { CreatedProductDTO, UpdateProductDTO } from './../dto/product.dto';
import { ProductService } from '../models/product-service-model';
import { faker } from '@faker-js/faker'

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  create(data: CreatedProductDTO): Product {
    const categoryId = data.categoryId ?? faker.number.int();
    const category: Category = {
      id: categoryId,
      name: faker.commerce.department(),
      slug: faker.helpers.slugify(faker.commerce.department()),
      image: faker.image.url(),
      creationAt: faker.date.past(),
      updatedAt: faker.date.recent()
    };

    const newProduct: Product = {
      id: faker.number.int(),
      title: data.title,
      slug: data.slug,
      price: data.price,
      description: data.description,
      images: data.images,
      category,
      creationAt: faker.date.past(),
      updatedAt: faker.date.recent()
    };

    this.add(newProduct);
    return newProduct;
  }

  add(product: Product): Product {
    this.products.push(product);
    return product;
  }

  updateProduct(id: Product['id'], changes: UpdateProductDTO): Product {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error(`Product with id ${id} not found`);
    }
    const prevData = this.products[index];

    const category: Category = {
      ...prevData.category,
      ...(changes.categoryId !== undefined ? { id: changes.categoryId } : {})
    };

    this.products[index] = {
      ...prevData,
      ...changes,
      category
    };
    return this.products[index];
  }

  deleteProduct(id: Product['id']): boolean {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    }
    this.products.splice(index, 1);
    return true;
  }

  readProductsById(id: Product['id']): Product | undefined {
    return this.products.find((item) => item.id === id);
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}

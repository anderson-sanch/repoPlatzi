import {Product} from './product.model'


// con omit expluyo de la base del obj lo que no necesito
export interface CreatedProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category' >{
    categoryId: string;
}

// con el pick incluyo del obj lo que si necesito
type example = Pick<Product, 'color' | 'description'>;

// esto lo que permite es crear un instancia del obj prodcut pero todos sus atributos son opcionales, pero tiene una pequeña falencia, el poder editar campos como la creacion o la actualizacion del producto, la solucion puede usar el partial en createdProductDTO y asi solo los campos de ese DTO seran opcionales, pero el resto de los campos del producto seguiran siendo obligatorios
export interface UpdateProductDTO extends Partial<CreatedProductDTO>{}

type example2 = Required<Product> // con esto lo que hago es que todos los campos del producto sean obligatorios, incluso los que son opcionales en la definicion del producto, como el color o la descripcion

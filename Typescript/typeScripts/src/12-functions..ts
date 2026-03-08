type Sizes = 'S' | 'M' | 'L' | 'XL';

function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
) {
    return {
        title,
        createdAt,
        stock,
        size
    }
}

const produdcto = createProductToJson('P1', new Date(), 12, 'XL');
console.log(produdcto);
console.log(produdcto.title);
console.log(produdcto.createdAt);
console.log(produdcto.stock);
console.log(produdcto.size);

const createProductToJsonV2 = (title: string, createdAt: Date, stock: number, size?: Sizes) => {

    return {
        title,
        createdAt,
        stock,
        size
    }
}

const productoV2 = createProductToJsonV2('P1', new Date(), 12);
console.log(productoV2);
console.log(productoV2.title.toLocaleLowerCase());
console.log(productoV2.size);


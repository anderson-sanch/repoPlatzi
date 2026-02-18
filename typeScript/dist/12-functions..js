"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createProductToJson(title, createdAt, stock, size) {
    return {
        title,
        createdAt,
        stock,
        size
    };
}
const produdcto = createProductToJson('P1', new Date(), 12, 'XL');
console.log(produdcto);
console.log(produdcto.title);
console.log(produdcto.createdAt);
console.log(produdcto.stock);
console.log(produdcto.size);
const createProductToJsonV2 = (title, createdAt, stock, size) => {
    return {
        title,
        createdAt,
        stock,
        size
    };
};
const productoV2 = createProductToJsonV2('P1', new Date(), 12);
console.log(productoV2);
console.log(productoV2.title.toLocaleLowerCase());
console.log(productoV2.size);

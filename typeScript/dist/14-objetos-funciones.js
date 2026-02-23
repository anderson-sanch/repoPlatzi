const login = (data) => {
    console.log(data.email, data.password);
};
login({ email: 'correo@correo.com', password: 1232131 });
const products = [];
const addProduct = (data) => {
    products.push(data);
};
addProduct({ title: 'pc', createdAt: new Date(19993, 1, 1), stock: 123, size: 'M' });
console.log(products);
export {};

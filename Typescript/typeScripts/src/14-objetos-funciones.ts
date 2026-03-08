const login = (data:{email:string, password:number}) => {
    console.log(data.email, data.password);
}

login({email: 'correo@correo.com', password: 1232131});

type Sizes = 'S' | 'M' | 'L';

const products: any = [];


const addProduct = (data: {title:string, createdAt:Date, stock: number, size?: Sizes}) => {

    products.push(data);
}

addProduct({title:'pc', createdAt: new Date(19993,1,1), stock: 123, size: 'M'});

console.log(products);

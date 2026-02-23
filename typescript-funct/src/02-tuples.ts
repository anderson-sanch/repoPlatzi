// las tuplas nos permiten declarar un array fuertemente tipado en el cual podemos definir los tipos de datos el tamaño del mismo

// array con multiples tipo
const prices: (number | string)[] = [1,2,3,4,5,6];

prices.push('1');
prices.push('2');

// tupla con datos definidos y tamaño
const user: [string, number, boolean] = ['ander', 25, true];

// destructuracion de una tupla 
const [string, number, boolean] = user;

console.log(string);

// dar datos a una tupla vacia 

let myName: [string, string] = ['', ''];

myName.push('Anderson');
myName.push('Sanchez')
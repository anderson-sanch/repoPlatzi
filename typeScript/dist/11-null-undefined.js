let mynumber = undefined; // Error: Type 'undefined' is not assignable to type 'number'.
let mystring = null; // Error: Type 'null' is not assignable to type 'string'.
let mynull = null; // Type is inferred as 'any'
let myundefined = undefined; // Type is inferred as 'any'
// aveces queremos permitir que una variable pueda ser null o undefined, para eso podemos usar el operador de unión (|)
let mynumber2 = null;
// Y aveces que queremos que sea null y luego tener un valor posteriormente
let mynumber3 = null;
mynumber3 = 5; // Ahora mynumber3 es un número válido
function hi(nombre) {
    let hello = 'hola';
    if (nombre) {
        hello += ' ' + nombre;
    }
    else {
        hello += ' nobody';
    }
}
hi('juan'); // Output: hola juan
hi(null); // Output: hola nobody
// manera mas sencilla 
function hi2(nombre) {
    let hello = 'hola';
    hello += nombre?.toUpperCase() || ' nobody';
    console.log(hello);
}
hi2('juan'); // Output: hola JUAN
hi2(null); // Output: hola nobody
export {};

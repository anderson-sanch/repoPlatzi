let mynumber : number = undefined; // Error: Type 'undefined' is not assignable to type 'number'.
let mystring : string = null; // Error: Type 'null' is not assignable to type 'string'.

let mynull: null = null; // Type is inferred as 'any'
let myundefined: undefined = undefined; // Type is inferred as 'any'

// aveces queremos permitir que una variable pueda ser null o undefined, para eso podemos usar el operador de unión (|)
let mynumber2: number | null = null;

// Y aveces que queremos que sea null y luego tener un valor posteriormente
let mynumber3: number | null = null;
mynumber3 = 5; // Ahora mynumber3 es un número válido

function hi(nombre: string | null) {
    let hello = 'hola';

    if (nombre) {
        hello += ' ' + nombre;
    }else{
        hello += ' nobody';
    }
}

hi('juan'); // Output: hola juan
hi(null); // Output: hola nobody

// manera mas sencilla 

function hi2(nombre: string | null) {
    let hello = 'hola';

    hello += nombre?.toUpperCase() || ' nobody';
    
    console.log(hello);
}

hi2('juan'); // Output: hola JUAN
hi2(null); // Output: hola nobody


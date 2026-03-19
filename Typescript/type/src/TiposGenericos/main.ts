function identity<T>(arg:T): T{
    return arg
}

let output1 = identity<string>('hola');

let output2 = identity<number>(22);

console.log(output1, output2);

// Loas genericos son tipos que despues se decidira el tipo, asi puedes usar la misma clase con mas de un tipo de datos

class Caja<T>{
    constructor(public dato: T){}

    public obtenerContenido():T{
        return this.dato
    }
}
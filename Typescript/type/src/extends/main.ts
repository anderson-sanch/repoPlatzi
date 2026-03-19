let nombre:string = 'anderson';

console.log(nombre.length);

function obtenerLenght<T extends {length:number}>(obj:T) : number {
    let longitud: number = obj.length;
    let TipoDato : string = typeof obj;

    console.log(`Este dato es tipo ${TipoDato} y su longitud es ${longitud}`);

    return longitud
}

console.log(obtenerLenght("anderson"));

console.log(obtenerLenght([1,2,3,4,5,6,7,8,9]));


// esta funcion con un dato generico y extendiendo {length:number} quiere decir que nosotros estamos limitanto la funcionalidad de esta funcion ya que solo podra recibir parametros que tengan la propiedad length, ejemplo strings o arrays pero numeros no






const whitout = () => {
    while(true){
        console.log('nunca paremos de aprender ');
        
    }
}

const fail = (message: string) => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if(typeof(input) == 'string'){
        return 'es un string'
    }else if(Array.isArray(input)){
        return 'es un array'
    }
    return fail('No hizo match')
}

console.log(example('hola'));
console.log(example([1,2]));
console.log(example(1));//se deteiene
console.log(example('hola'));

// el tipo never hace referencia a los datos que nunca van a parar o que detendran la ejecucion del programa
// Anderson => [A,n,d,e,r,s,o,n]
// [A,n,d,e,r,s,o,n] => Anderson


export function parseString(input: string): string[];   
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;



// Sobrecarga de funciones: Permite definir múltiples firmas para una función, lo que permite que la función se comporte de manera diferente según los tipos de argumentos que reciba, con la sintaxis de arriba no es necesario validar el dato para acceder a sus metodos.

// Sobrecarga de funciones en TypeScript
export function parseString(input: unknown): unknown {
    if (typeof input === 'string') {
        return input.split(''); // Convierte la cadena en un array de caracteres
    } else if(input instanceof Array){
        return input.join(''); // Convierte el array de caracteres en una cadena
    } else if(typeof input === 'boolean'){
        return true; // Convierte el booleano en una cadena y luego en un array de caracteres
    }

    // if(Array.isArray(input)){
    //     return input.join(''); // Convierte el array de caracteres en una cadena
    // } else {
    //     return input.split(''); // Convierte la cadena en un array de caracteres
    // }
}


const result1 = parseString("Anderson"); // Devuelve ['A', 'n', 'd', 'e', 'r', 's', 'o', 'n']
if(Array.isArray(result1)){
    result1.forEach(element => {
        
    });
}

const result2 = parseString(['A', 'n', 'd', 'e', 'r', 's', 'o', 'n']); // Devuelve "Anderson"
result2.toUpperCase();
//con este metodod puedo acceder a los metodos propios de cada tipo de dato sin necesidad de hacer una verificacion de tipo, lo que hace que el codigo sea mas elegante y menos verboso, por lo que se recomienda utilizar la sobrecarga de funciones solo cuando sea necesario y no como una forma de evitar la verificacion de tipos. 

// si en la sobrecarga tenemos un retorno de unknown, lo ideal es dejarla de ultima, si no, no funciona

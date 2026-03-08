// Anderson => [A,n,d,e,r,s,o,n]
// [A,n,d,e,r,s,o,n] => Anderson

// Sobrecarga de funciones: Permite definir múltiples firmas para una función, lo que permite que la función se comporte de manera diferente según los tipos de argumentos que reciba.

// Sobrecarga de funciones en TypeScript
function parseString(input: string | string[]): string | string[] {
    if (typeof input === 'string') {
        return input.split(''); // Convierte la cadena en un array de caracteres
    } else {
        return input.join(''); // Convierte el array de caracteres en una cadena
    }

    // if(Array.isArray(input)){
    //     return input.join(''); // Convierte el array de caracteres en una cadena
    // } else {
    //     return input.split(''); // Convierte la cadena en un array de caracteres
    // }
}

//la sobrecarga de funciones se puede lograr utilizando la sintaxis de sobrecarga de TypeScript, que permite definir múltiples firmas para una función. Esto es útil cuando deseas que una función pueda aceptar diferentes tipos de argumentos y devolver diferentes tipos de resultados según el caso.

/// No se puede hacer con arrow functions, ya que las arrow functions no admiten sobrecarga de funciones en TypeScript. La sobrecarga de funciones se logra mediante la declaración de múltiples firmas para una función tradicional, lo que no es compatible con la sintaxis de las arrow functions.

//otro problema que se presenta es que no se puede hacer metodos propios de tipos de datos sin antes poder hacer una verificacion de tipo, lo que hace que el codigo sea mas verboso y menos elegante, por lo que se recomienda utilizar la sobrecarga de funciones solo cuando sea necesario y no como una forma de evitar la verificacion de tipos.
//ejemplo

const result1 = parseString("Anderson"); // Devuelve ['A', 'n', 'd', 'e', 'r', 's', 'o', 'n']
if(Array.isArray(result1)){
    result1.forEach(element => {
        
    });
}

// como podemos ver solo despues de la verificacion de tipo podemos acceder a los metodos propios de cada tipo de dato, lo que hace que el codigo sea mas verboso y menos elegante, por lo que se recomienda utilizar la sobrecarga de funciones solo cuando sea necesario y no como una forma de evitar la verificacion de tipos.
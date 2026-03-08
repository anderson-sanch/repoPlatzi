/**
 * El tipo `unknown` en TypeScript representa cualquier valor, similar a `any`, pero es más seguro.
 * No se pueden realizar operaciones sobre un valor de tipo `unknown` sin primero realizar una comprobación de tipo o una aserción.
 * Esto ayuda a evitar errores en tiempo de ejecución y promueve un manejo más seguro de valores dinámicos.
 * Es útil cuando se reciben datos de fuentes externas cuyo tipo no se conoce de antemano.
 */

let anyUnknow: unknown;
anyUnknow = true;
anyUnknow = 1;
anyUnknow = 'hola';
anyUnknow = 2405;
anyUnknow = {};

if(typeof(anyUnknow) == 'string'){
    anyUnknow.toUpperCase();
}

const parse = (data : {name:string}): unknown => {
    return JSON.parse(data.name);
}

// Pass a valid JSON string as the 'name' property
const anderson = parse({name:'{"name":"anderson"}'});

console.log(anderson);

// Resumen
// Nos permite definir más de un tipo de dato a una variable, argumento de una función, etc.
let userId;
userId = 10;
userId = "10";
function helloUser(id) {
    console.log(`Hola usuario con el número de id ${id}`);
}
export {};
// Aquí indicamos que id y userId pueden ser de tipo string o number.
// Una mejor práctica
// El tipo de dato any nos brinda la flexibilidad de JavaScript en TypeScript con respecto al tipado. Sin embargo, si deseamos eso, es mejor hacer uso de los Union Types.
// Contribución creada por: Martín Álvarez.

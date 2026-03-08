// 
// function getValeu(value: number | string) {
//     return value;
// }
// function getValeu(value: unknown) {
//     return value;
// }

function getValeu<T, U>(value: T): T {
    const array: U[] = [];
    return value;
}

// Los generics nos permiten crear funciones, clases e interfaces que pueden trabajar con diferentes tipos de datos sin perder la información de tipo. En el ejemplo anterior, la función getValeu acepta un tipo genérico T para el valor de entrada y devuelve un valor del mismo tipo T. Además, se define un segundo tipo genérico U para crear un array vacío dentro de la función, aunque en este caso no se utiliza.
// son muy útiles para crear código reutilizable y flexible, ya que permiten que una función o clase funcione con cualquier tipo de dato sin necesidad de duplicar el código para cada tipo específico. Al usar genéricos, se puede mantener la seguridad de tipos y evitar errores en tiempo de ejecución, ya que el compilador puede verificar que los tipos sean correctos en tiempo de compilación.
// la diferencia con la sobrecarga de funciones es que los genéricos permiten trabajar con tipos de datos de manera más flexible y reutilizable, mientras que la sobrecarga de funciones se basa en definir múltiples firmas de función para diferentes tipos de datos. Con los genéricos, no es necesario definir múltiples versiones de la función para cada tipo específico, lo que hace que el código sea más limpio y fácil de mantener.



getValeu<number , string>(5).toFixed(2);
getValeu<string , number>('5').toLocaleLowerCase();
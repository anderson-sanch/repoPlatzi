// console.log('Hola mundo')//hace print de info
// console.info('Console.info(): Similar al log pero para mostrar informacion')//muy similar a log pero para mostrar info
// console.warn('Console.warm para advertencias')//muestra para advertencias
// console.error('Console.error para errores')//muestra para errores
// metodos basicos de salida

// representa tablas
// const nombres = [
//   {nombre: 'anderson', edad: 24},
//   {nombre: 'andres', edad: 21},
//   {nombre: 'julia', edad: 22},
// ]

// console.table(nombres, ['nombre']);

// time
// console.time('operacion');
// for (let i = 0; i < 20000; i++) {
// console.log(i);
// }
// console.timeEnd('operacion')


// count
console.count('contador')
console.count('contador')
console.count('contador')
console.count('contador')
console.count('contador')
console.countReset('contador')

// agrupacion
console.group('grupo Principal')
console.log('hola mami');
console.group("grupo subgrupo1");
console.log("hola mami en el subgrupo1");
console.groupEnd();
console.group("grupo subgrupo2");
console.log("hola mami en el subgrupo2");
console.groupEnd();

// afirmaciones
console.assert(1===1, 'no se muestra');

// clear
console.clear()

console.trace('Mostrar la pila de llamadas actual')

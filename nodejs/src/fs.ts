import fs from 'fs';

const filename: string = 'example.txt';

// crear
fs.writeFileSync(filename, 'Hola chamos qlq')

console.log('filed created success');

// leer
const content = fs.readFileSync(filename, 'utf-8');

console.log(`Contenido dentro del archivo - ${content}`);

// asctualizar
fs.appendFileSync(filename, 'Esta es una nueva linea.')
const content2 = fs.readFileSync(filename, 'utf-8')

console.log(`archivo actualizado correctamente: ${content2}`);

// eliminar
fs.unlinkSync(filename)
const content3 = fs.readFileSync(filename, "utf-8");
console.log(content3);
// elimino todo el archivo

// fs es un modelo nativo de nodejs para pode manipular archivos


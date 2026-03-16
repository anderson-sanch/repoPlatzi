import fs from 'node:fs';

const filename = 'example.txt';

// crear
fs.writeFileSync(filename, 'Esto es un archivo de ejemplo de uso de fs');
console.log('Archivo Creado correctamente');

// Leer
const content = fs.readFileSync(filename, 'utf-8');
console.log(content);

// actualizar - agregar
fs.appendFileSync(filename, '\nEste es otro mensajer\n');


// eliminar
fs.unlinkSync(filename);

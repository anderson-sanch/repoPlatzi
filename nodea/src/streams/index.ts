import * as fs from 'fs';
import * as path from 'path';

// const filePath = path.join(__dirname, 'entrada.txt');
// const data = fs.readFileSync(filePath, 'utf-8');

// console.log(data);

const filePath = path.join(__dirname, 'entrada.txt');
const data = fs.createReadStream(filePath, 'utf-8');

data.on('data', (chunk) => {
    console.log(chunk.toString());
})

data.on('end', () => {
    console.log('se termino');
    
})
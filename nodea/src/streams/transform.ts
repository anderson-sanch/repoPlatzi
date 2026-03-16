import * as fs from 'node:fs';
import * as path from 'node:path';
import { Transform, pipeline } from 'node:stream';

const toUpperCase = new Transform({
    transform(chunk, _encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

const thisFile = path.join(__dirname, 'entrada.txt');
const outputFile = path.join(__dirname, 'salida.txt');

pipeline(
    fs.createReadStream(thisFile, 'utf-8'),
    toUpperCase,
    fs.createWriteStream(outputFile),
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);
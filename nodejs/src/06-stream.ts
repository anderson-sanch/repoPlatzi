import fs from 'fs'

const readstream = fs.createReadStream('./src/book.txt', {encoding: 'utf-8'})
const writeStream = fs.createWriteStream('output-js.txt')

readstream.on('data', (chuck) => {
  console.log('Chunck:', chuck);
  writeStream.write(chuck);
})

readstream.on('end', () => {
  console.log('terminada la lectura del archivo');
  writeStream.end();
})


readstream.on('error', (err) => {
  console.log('error de lectura del archivo', err);
})

writeStream.on('error', (err) => {
  console.log('error en la escritura del archivo', err);

})

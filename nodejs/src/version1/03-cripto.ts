import crypto from 'crypto'

const texto = 'hello crypto world'
const hash = crypto.createHash('sha256').update(texto).digest('hex')

console.log(`texto original: ${texto}`);
console.log(`texto hash: ${hash}`);

// https://www.onlinehashcrack.com/
// pagina para crear hash

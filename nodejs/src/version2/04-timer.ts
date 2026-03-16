console.log(`Hora actual:`, new Date().toLocaleTimeString());

const timeout = setTimeout(() => {
  console.log(`Este mensaje aparece despues de 2 segundos`);
  console.log(`Hora actual:`, new Date().toLocaleTimeString());
},2000)

setImmediate(() => {
  console.log(`Este mensaje aparece en la proxima iteracion del bucle`);
  console.log(`Hora actual:`, new Date().toLocaleTimeString());
})

const interId = setInterval(() => {
  console.log('Este mensaje aparece cada 3 seg');

},3000)

setTimeout(() => {
  console.log('detenemos el intervalo despues de 10 seg');
  clearInterval(interId)

},10000)

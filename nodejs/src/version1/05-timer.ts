console.log(`Hola actual:`, new Date().toLocaleTimeString());

const timeOut = setTimeout(() => {
  console.log('este mensaje aparece despuesde 2 seg y medio');
  console.log(`Hola actual:`, new Date().toLocaleTimeString());

}, 2500)

setImmediate(() => {
  console.log('este mensaje aparece en la proxima iteracion del bucle')
  console.log(`Hola actual:`, new Date().toLocaleTimeString());
})


const intervalid = setInterval(() => {
  console.log('este mensaje aparece cada 3 segundo');
  console.log(`Hola actual:`, new Date().toLocaleTimeString());

}, 3000)

setTimeout(() => {
  console.log('cancelar el intervalo despues de 10 segundo');
  console.log(`Hola actual:`, new Date().toLocaleTimeString());

  clearInterval(intervalid);
}, 10000)

const timeOutId = setTimeout(() => {
  console.log('este mensaje nunca aparecera');

}, 10000)

clearTimeout(timeOutId);
console.log(`Hola actual:`, new Date().toLocaleTimeString());

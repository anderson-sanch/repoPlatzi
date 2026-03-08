// console.log("ID del proceso (pid):", process.pid);
// console.log("Directorio actual (cwd):", process.cwd()); // recuerda ejecutarla como función.
// console.log("Versión de Node.js:", process.version);
// console.log("Plataforma:", process.platform); // p. ej., Darwin.
// console.log("Arquitectura:", process.arch); // p. ej., arm.
// console.log("Tiempo de ejecución (s):", process.uptime());

// console.log(process.env);
// console.log(`path: ${process.env.PATH}`);
// console.log(`UserProfile: ${process.env.HOME || process.env.USERPROFILE}`);
// console.log(`NODE_ENV: ${process.env.NODE_ENV || 'no definido'}`);

// const memoriaUsage = process.memoryUsage();
// console.table(memoriaUsage);

// for(const elemento in memoriaUsage){
//   console.log(`elemento: ${elemento} ${memoriaUsage[elemento] / 1048576} MB`);
// }

process.on('exit', code =>{
  console.log('el proceso esta terminado', code);
})

process.on('SIGINT', () => {
  console.log('se recibio la señal de interrupcion (Ctrl + C)');
  process.exit(0)
})

console.log('Escribe algo y preciona enter o Ctrl+C para salir');
process.stdin.on('data', data => {
  const input = data.toString().trim();
  if(input.toLowerCase() === 'salir'){
    console.log('Comando de salida recibido');

    process.exit(0)
  }else{
    console.log(`escribiste ${input}`);
    console.log('escribe "salir" para terminar o escribe algo mas');
  }
})

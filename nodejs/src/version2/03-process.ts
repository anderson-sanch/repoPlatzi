import { exit } from "node:process";

console.log("ID del proceso (pid):", process.pid);
console.log("Directorio actual (cwd):", process.cwd()); // recuerda ejecutarla como función.
console.log("Versión de Node.js:", process.version);
console.log("Plataforma:", process.platform); // p. ej., Darwin.
console.log("Arquitectura:", process.arch); // p. ej., arm.
console.log("Tiempo de ejecución (s):", process.uptime());
// segunda párte
console.log("Variables de entorno:", process.env); // inspección general.

console.log("PATH:", process.env.PATH);
console.log(
  "Perfil de usuario (HOME/USERPROFILE):",
  process.env.HOME || process.env.USERPROFILE,
);
console.log("NODE_ENV:", process.env.NODE_ENV ?? "no definido");


// memoria
const memoryUsages = process.memoryUsage();
console.log(memoryUsages);

// eventos
// on es como el adeventListener lo que permite escuchar eventos
process.on('exit', code => {
  console.log('el proceso esta terminado' + code);
})

process.on('SIGINT', () => {
  console.log('recibimos la señal de interrupcion (CTRL + C)');
  process.exit(24)
  // cierra el programa que se esta ejecutando, lo que hacemos es que escuchamos ese evento con .on
})

console.log(`escribe algo y presiona enter o CTRL + C para salir`);
process.stdin.on('data', data => {
  const input = data.toString().trim();
  if(input.toLocaleLowerCase() == 'salir'){
    process.exit(20)
  }else{
    console.log(`Tu mensaje: ${input}`);
    console.log(`para salir escribe salir o algo mas`);

  }
})




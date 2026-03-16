import os from 'os'

function showsystemInfo(){
  // muestra el sistema operativo
  console.log(`show operative system: ${os.type()}`);
  // plataforma
  console.log(`Plataforma: ${os.platform()}`);
  // arquitectura
  console.log(`Arquitectura: ${os.arch()}`);
  // version
  console.log(`Version: ${os.release()}`);

  console.log("Uptime del sistema (segundos):", os.uptime());
  console.log("Memoria total (bytes):", os.totalmem());
  console.log("Memoria libre (bytes):", os.freemem());
  console.log("Cores disponibles:", os.cpus().length);
  console.log("Directorio principal:", os.homedir());
  console.log("Hostname:", os.hostname());

}

showsystemInfo();

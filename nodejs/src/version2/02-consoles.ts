// mensajes
console.log("Hola mundo.");
console.info("Similar a log, para mostrar información.");
console.warn("Advertencia: revisa tu configuración.");
console.error("Error: operación no completada.");
// table
const usuarios = [
  { nombre: 'Ana', edad: 28, rol: 'admin' },
  { nombre: 'Luis', edad: 34, rol: 'editor' },
  { nombre: 'Maya', edad: 25, rol: 'viewer' }
];

console.log(usuarios);           // Salida lineal.
console.table(usuarios);         // Tabla con index, nombre, edad, rol.
console.table(usuarios, ['nombre', 'rol']); // Filtra columnas.
// time
console.time('operacion');

// Simulación de trabajo costoso
for (let i = 0; i < 1e6; i++) {}

console.timeEnd('operacion'); // Mide el tiempo transcurrido.

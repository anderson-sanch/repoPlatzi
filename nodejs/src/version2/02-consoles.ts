// mensajes
console.log("Hola mundo.");
console.info("Similar a log, para mostrar información.");
console.warn("Advertencia: revisa tu configuración.");
console.error("Error: operación no completada.");
// table
const usuarios = [
  { nombre: "Ana", edad: 28, rol: "admin" },
  { nombre: "Luis", edad: 34, rol: "editor" },
  { nombre: "Maya", edad: 25, rol: "viewer" },
];

console.log(usuarios); // Salida lineal.
console.table(usuarios); // Tabla con index, nombre, edad, rol.
console.table(usuarios, ["nombre", "rol"]); // Filtra columnas.
// time
console.time("operacion");

// Simulación de trabajo costoso
for (let i = 0; i < 1e6; i++) {}

console.timeEnd("operacion"); // Mide el tiempo transcurrido.
// contadores
console.count("contador"); // 1
console.count("contador"); // 2
console.countReset("contador"); // reset
console.count("contador"); // 1
// grupos
console.group("grupo principal");
console.log("información uno");

console.group("subgrupo de información");
console.log("información subgrupo uno");
console.groupEnd();

console.log("final del grupo");
console.groupEnd();

// asertamiento
console.assert(1 == 1, 'no se muestra');      // no imprime nada
// console.assert(1 == 2, 'esto sí se mostrará'); // imprime el mensaje

// pila
console.trace("mostrar la pila de llamadas actual");

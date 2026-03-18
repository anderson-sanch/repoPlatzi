//array - array normal
var nombres = [];
var apellidos = [];
var mixto = [];
var personas = [
    { nombre: "anderson", edad: 24 },
];
personas.push({ nombre: 'alejandro', edad: 22 });
//tupla - se define la longitud y datos - no mutable 
var datos = ['ander', 24, true];
//enum
var Estado;
(function (Estado) {
    Estado[Estado["Pendiente"] = 0] = "Pendiente";
    Estado[Estado["EnProceso"] = 1] = "EnProceso";
    Estado[Estado["Completado"] = 2] = "Completado";
})(Estado || (Estado = {}));
console.log(Estado[2] + 'caho');
console.log(0 /* Direccion.Arriba */ + 'hola');

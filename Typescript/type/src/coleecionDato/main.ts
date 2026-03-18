//array - array normal
const nombres: string[] = [];
const apellidos: Array<string> = [];
const mixto: any[] = [];

interface Persona {
    nombre: string,
    edad: number
}

let personas: Persona[] = [
    {nombre: "anderson", edad: 24},
];

personas.push({nombre:'alejandro', edad: 22})

//tupla - se define la longitud y datos - no mutable 
const datos: [string, number, boolean] = ['ander', 24, true]

//enum

enum Estado {
    Pendiente,
    EnProceso,
    Completado
}

const enum Direccion {
  Arriba,
  Abajo
}

console.log(Estado[2] + 'caho')
console.log(Direccion.Arriba + 'hola')
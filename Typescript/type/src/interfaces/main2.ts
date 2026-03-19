interface Direccion {
    calle: string,
    numero: number,
    ciudad?: string
}

let direccion: Direccion = {
    calle: 'mi calle',
    numero: 24
}

//readonly

interface Persona {
    readonly nombre: string,
    readonly edad: number,
    readonly isDevelopment?: boolean
}

let anderson:Persona = {
    nombre: 'Anderson',
    edad: 24,
}

// anderson.nombre = 'eduardo'; no se puede porque es solo de lectura

console.log(anderson);

// interface extendida
interface Empleado extends Persona {
    cargo: string
}

let ander:Empleado = {
    nombre: 'anderson',
    edad: 23,
    isDevelopment: true,
    cargo: 'desarrollador'
}

// una interface se puede sobre escribir sin eliminar lo antes contenido

interface jugador {
    correr:string
} 

interface jugador {
    saltar:boolean
}

let messi : jugador = {
    correr: 'si puede',
    saltar: true
}



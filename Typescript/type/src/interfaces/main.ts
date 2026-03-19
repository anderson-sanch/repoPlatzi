interface Persona {
    nombre: string,
    eda: number,
    esDesarrollador: boolean
}

let persona: Persona = {
    nombre: 'anderson',
    eda: 24,
    esDesarrollador: true
}

// console.log(persona.nombre);

let personas: Persona[] = [
    {
        nombre: 'anderson',
        eda: 24,
        esDesarrollador: true
    },
    {
        nombre: 'anderson',
        eda: 24,
        esDesarrollador: true
    },
    {
        nombre: 'anderson',
        eda: 24,
        esDesarrollador: true
    }
]

function mostrarNombres(personas:Persona[]):void{
    for (const nombre of personas) {
        console.log(nombre.nombre);
    }
}

console.log(mostrarNombres(personas));

interface Sumar {
    (a:number, b:number): number
    // sirve para implementar parametros en funciones sin nombre
}

let sumar : Sumar = (a:number, b:number): number => {
    return a + b
}
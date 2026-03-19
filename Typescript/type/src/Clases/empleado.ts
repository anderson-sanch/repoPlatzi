import { Persona } from "./main";

class Empleado extends Persona {

    constructor(nombre:string, edad:number, esDesarrollador:boolean, public puesto: string){
        super(nombre,edad, esDesarrollador)
    }

    public saludar() : string{
        return `Hola`
    }

    public obtenerInfo(): string{
        return `${this.nombre} ${this.edad} ${this.esDesarrollador}, ${this.puesto}`
    }
}

const anderson = new Empleado('anderson',24, true, 'encargado');
const ander = new Persona ('alejandro', 25, false);

console.log(ander.saludar());
console.log(anderson.saludar());

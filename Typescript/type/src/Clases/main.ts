interface Person {
    nombre: string,
    edad: number,
    esDesarrollador: boolean,
}


export class Persona implements Person {


    constructor(public nombre: string, public edad: number, public esDesarrollador: boolean) {}
    
    saludar(): string {
        return `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años de edad`
    }
}

class Animal {

    constructor(public nombre:string, protected color:string, private cuadrupedo:boolean){}

    public isCuadrupedo(): string{
        if(this.cuadrupedo === true){
            return `Este animal de nombre ${this.nombre} es cuadrupedo`
        }
        return `Este animal de nombre ${this.nombre} no es cuadrupedo`
    }

    protected colorRojo() : true{
        return true
    }

    private IsNombre(): void{
        console.log(`es un nombre`);
        
    }
}


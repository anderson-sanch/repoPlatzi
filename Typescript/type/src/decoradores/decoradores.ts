function personaDec(target: Function){
    console.log(target);

    target.prototype.despedir = function (despedida: string):string{
        return `${despedida}, ${this.nombre}`
    }
    
}

@personaDec
class Persona2 {
    constructor(public nombre: string, public edad:number){}

    public saludar(saludo: string): string{
        return `${saludo}, mi nombre es ${this.nombre} y tengo ${this.edad}`
    }

    despedir!: (despedida:string) => string;
} 
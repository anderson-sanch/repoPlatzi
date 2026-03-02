export interface Driver {
    data: string;
    password: string;
    port: number;

    connect(): void;
    disconnect(): void;
    isConnected(name: string): boolean
}

// const driver : Driver = {
//     data: "localhost",
//     password: "123456",
//     port: 3306,

//     connect(): void {
        
//     }
// }

class postgreSQL implements Driver {    
    constructor(
        public data: string,
        public password: string,
        public port: number
    ){}

    connect (): void {

    }

    disconnect(): void {
        
    }

    isConnected(name: string): boolean {
        return true;
    }
}

class Oracle implements Driver {
    constructor(
        public data: string,
        public password: string,
        public port: number
    ){}

    connect (): void {
        
    }

    disconnect(): void {
    }

    isConnected(name: string): boolean {
        throw new Error("Method not implemented.");
    }


    
}

// interface: los interfaces definen contratos, es decir, con el creas un molde que te permite parametrizar tus clases, obligando que toda clase que implemente ese contrato, tenga las mismas propiedades y métodos. Es decir, el interface es un molde que define la estructura de una clase, pero no implementa la lógica de esa clase.
// tener en cuenta qie las interfaces siempre tendran sus parametros publicos, si quieres uno privado se debe agregar en la clase y no tendra error 
// parametros opcionales
function saludar(nombre: string, saludo?:string): string {
    if(saludo){
        return `${saludo}, ${nombre}`
    }else{
        return `Hola ${nombre}`
    }
}

console.log(saludar('anderson'));
console.log(saludar('anderson', 'Buenas noches'));

// parametros multiples
function sumarTodos(...numeros:number[]): number{
    return numeros.reduce((acumulado, actual) => acumulado+actual, 0)
}

const total = sumarTodos(1,2,3,4,5,6,7,8,9,10,11,12,13);

console.log(total);

// Valores por defecto 
function despedir(nombre: string, despedida:string = 'adios'): string{
    return `${nombre} ${despedida}`
}

console.log(despedir('anderson'));

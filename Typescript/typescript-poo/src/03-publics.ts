export class MyDate{
    public year: number;
    public month:number;
    public day: number;

    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    // metodos son funciones que se declaran dentro de una clase, y pueden ser utilizadas por los objetos de esa clase
    public printFormat(): string{
        return `${this.day}/${this.month}/${this.year}`;
    }

    public add(amount: number, type: 'day' | 'month' | 'year'): void{
        if(type === 'day'){
            this.day += amount;
        } else if(type === 'month'){
            this.month += amount;
        } else if(type === 'year'){
            this.year += amount;
        }
    }

    // los publicos pueden ser accedidos desde cualquier parte del codigo, incluso fuera de la clase
}

const mydate = new MyDate(2020, 11, 25);

console.log(mydate.printFormat());

mydate.add(1, 'day');

console.log(mydate.printFormat());

// al ser publicos, podemos acceder a las propiedades de la clase desde fuera de la clase
mydate.day = 15;

console.log(mydate.printFormat());
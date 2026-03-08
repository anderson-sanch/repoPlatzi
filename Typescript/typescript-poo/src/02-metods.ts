export class MyDate{
    year: number;
    month:number;
    day: number;

    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    // metodos son funciones que se declaran dentro de una clase, y pueden ser utilizadas por los objetos de esa clase
    printFormat(): string{
        return `${this.day}/${this.month}/${this.year}`;
    }

    add(amount: number, type: 'day' | 'month' | 'year'): void{
        if(type === 'day'){
            this.day += amount;
        } else if(type === 'month'){
            this.month += amount;
        } else if(type === 'year'){
            this.year += amount;
        }
    }
}

const mydate = new MyDate(2020, 11, 25);

console.log(mydate.printFormat());

mydate.add(1, 'day');

console.log(mydate.printFormat());
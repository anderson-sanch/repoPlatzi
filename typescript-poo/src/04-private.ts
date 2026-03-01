export class MyDate{
    private year: number;
    private month:number;
    private day: number;

    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    // metodos son funciones que se declaran dentro de una clase, y pueden ser utilizadas por los objetos de esa clase
    public printFormat(): string{
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
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

    private addPadding(amount: number): string{
        if(amount < 10){
            return `0${amount}`;
        }
        return `${amount}`;
    }

    // los privados solo pueden ser accedidos desde dentro de la clase, no pueden ser accedidos desde fuera de la clase 
}

// si queremos modificar las propiedades de la clase, debemos hacerlo a traves de los metodos publicos.


const mydate = new MyDate(2020, 8, 5);

console.log(mydate.printFormat());
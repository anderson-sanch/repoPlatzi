export class MyDate{


    constructor(
        private year: number = 1993,
        private month: number = 7,
        private day: number = 9
    ){}

    // esta es una manera de como abreviar el codigo del constructor

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

}

const mydate = new MyDate();
console.log(mydate.printFormat());

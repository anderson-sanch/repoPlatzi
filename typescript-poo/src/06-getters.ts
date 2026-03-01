export class MyDate{

    constructor(
        private year: number = 2001,
        private month: number = 7,
        private _day: number = 9
    ){}

    public printFormat(): string{
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }

    public add(amount: number, type: 'day' | 'month' | 'year'): void{
        if(type === 'day'){
            this._day += amount;
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

    get day() {
        return this._day;
    }

    get isLeapYear(): boolean{
        if(this.year % 4 === 0 && this.year % 100 !== 0 || this.year % 400 === 0){
            return true;
        }
        return false;
    }

    // los getters son metodos que nos permiten acceder a las propiedades de la clase, pero no nos permiten modificarlas, ademas se pueden dar get a funciones y no debemos llamar a la funcion, es como si fuera un atributo

    // los getters siempre deben devolver un valor

}

const mydate = new MyDate(2000);
console.log(mydate.isLeapYear);

const mydate1 = new MyDate(2001);
console.log(mydate1.isLeapYear);

const mydate2 = new MyDate(2002);
console.log(mydate2.isLeapYear);

const mydate3 = new MyDate(2003);
console.log(mydate3.isLeapYear);
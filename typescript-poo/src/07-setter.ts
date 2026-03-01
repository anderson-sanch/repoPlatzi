export class MyDate{

    constructor(
        private _year: number = 2001,
        private _month: number = 7,
        private _day: number = 9
    ){}

    public printFormat(): string{
        const day = this.addPadding(this._day);
        const month = this.addPadding(this._month);
        return `${day}/${month}/${this._year}`;
    }

    public add(amount: number, type: 'day' | 'month' | 'year'): void{
        if(type === 'day'){
            this._day += amount;
        } else if(type === 'month'){
            this._month += amount;
        } else if(type === 'year'){
            this._year += amount;
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
        if(this._year % 4 === 0 && this._year % 100 !== 0 || this._year % 400 === 0){
            return true;
        }
        return false;
    }

    set month(newValue: number){

        if(newValue >= 1 && newValue <= 12){
            this._month = newValue;
        }else{
            throw new Error('Month must be between 1 and 12');
        }
    }

    // los set no devuelven nada, es un void

}

const myDate = new MyDate(2001,4,24);

console.log(myDate.printFormat());
myDate.month = 12;
console.log(myDate.printFormat());

myDate.month = 13; // esto va a lanzar un error porque el mes no puede ser mayor a 12
console.log('this line will not be executed');

const date = new Date();
date.getDate();
date.getDay();
date.getFullYear();

const date2 = new Date(2020, 11, 25);

console.log(date, date2);

// clase

export class MyDate{
    year: number;
    month:number;
    day: number;

    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

const mydate = new MyDate(2020, 11, 25);

console.log(mydate);


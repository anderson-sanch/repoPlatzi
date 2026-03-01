export class Animal {
    constructor(
    public _name:string,

){}
    move(){
        console.log('I am moving');
    }

    gretting(){
        console.log(`Hi, i'm ${this._name}`);
        
    }
}

const angel = new Animal('Angel');
angel.gretting();
angel.move();

class Dog extends Animal {

    
    constructor(
        name:string,
        public owner:string
    ){
        super(name);
    }

    bark(times: number) : void {
        for(let i = 0; i < times; i++){
            console.log('Woof!');
        }
    }
}

const thor = new Dog('Thor','Anderson');
thor.gretting();
thor.move();
thor.bark(3);
console.log(thor.owner);
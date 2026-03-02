export abstract class Animal {
    constructor(
    protected _name:string,

){}
    move(){
        console.log('I am moving');
    }

    gretting(){
        console.log(`Hi, i'm ${this._name}`);
        
    }

    protected doSomething(){
        console.log('Doing something');
    }
     
}

export class Dog extends Animal {

    
    constructor(
        name:string,
        public owner:string
    ){
        super(name);
    }

    bark(times: number) : void {
        for(let i = 0; i < times; i++){
            console.log('Woof!' + this._name);
        }
        this.doSomething();
    }

    move(){
        console.log('I am running as a dog');
        super.move();
    }
}

const thor = new Dog('Thor','Anderson');
// thor._name = 'Thor II';

thor.bark(2);
thor.move();
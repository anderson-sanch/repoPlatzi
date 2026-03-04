export abstract class Animal {
    constructor(
    protected name:string,

){}
    move(){
        console.log('I am moving');
    }

    gretting(){
        console.log(`Hi, i'm ${this.name}`);
        
    }

    protected doSomething(){
        console.log('Doing something');
    }

    public changeName(newName : string){
        this.name = newName;
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
            console.log('Woof!' + this.name);
        }
        this.doSomething();
    }

    move(){
        console.log('I am running as a dog');
        super.move();
    }
}

const thor = new Dog('Thor','Anderson');
thor.changeName('Thor II');

thor.bark(2);
thor.move();

// protected: Solo se puede acceder desde la clase y sus subclases, no desde instancias de la clase.
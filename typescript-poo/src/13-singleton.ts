export class MyService {

    static instance: MyService | null = null;

    private constructor(
        private name: string
    ){}
    
    getName(){
        return this.name
    }

    static created(name: string){
        if(MyService.instance === null){
            console.log('deberia entrar una vez');
            
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    }
}

const miService1 = MyService.created('Service 1');
console.log(MyService.created,miService1.getName());

const miservice2 = MyService.created('Service 2');
console.log(miservice2.getName());

console.log(miService1 === miservice2);


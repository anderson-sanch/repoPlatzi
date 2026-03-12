class Singleton {
    static #instance: Singleton


    private constructor(private name?:string){}

    public static get instance(): Singleton{
        if(!Singleton.#instance){
            Singleton.#instance = new Singleton();
        }
        return Singleton.#instance
    }
    setName (name:string){
        this.name = name
    }
}

const singleton1 = Singleton.instance;
const singleton2 = Singleton.instance;

if(singleton1 === singleton2){
    console.log('singleton funciona');
}else{
    console.log('singleton fallo');
}

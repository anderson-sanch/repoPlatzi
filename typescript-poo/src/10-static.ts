console.log(Math.PI);
console.log(Math.max(1,2,3,4,5));

class myMath {
   static readonly Pi = 3.1416;
    // static es un modificador que se utiliza para definir miembros estáticos en una clase. Un miembro estático pertenece a la clase en sí misma, en lugar de a las instancias de la clase. Esto significa que puedes acceder a un miembro estático sin necesidad de crear una instancia de la clase.

    static max(...numbers: number[]){
        return numbers.reduce((max, item) => max >= item ? max : item , -Infinity);
    }
}

// const mymath = new myMath();
// console.log(mymath.Pi);
console.log(myMath.Pi);
const numbers = [-1,-2,-4];
console.log(myMath.max(...numbers));


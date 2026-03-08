console.log(Math.PI);
console.log(Math.max(1,2,3,4,5));

class myMath {
   static readonly Pi = 3.1416;
    // static es un modificador que se utiliza para definir miembros estáticos en una clase. Un miembro estático pertenece a la clase en sí misma, en lugar de a las instancias de la clase. Esto significa que puedes acceder a un miembro estático sin necesidad de crear una instancia de la clase.
    // los beneficios de los miembros estáticos son que pueden ser accedidos directamente a través de la clase, lo que puede ser útil para definir constantes o métodos que no dependen del estado de una instancia específica. Además, los miembros estáticos pueden ser compartidos entre todas las instancias de la clase, lo que puede ahorrar memoria y mejorar el rendimiento en algunos casos.
    // ejemplos pueden ser la constante Pi, o un método que calcule el área de un círculo dado su radio, ya que estos no dependen del estado de una instancia específica de la clase.

    static max(...numbers: number[]){
        return numbers.reduce((max, item) => max >= item ? max : item , -Infinity);
    }
}

// const mymath = new myMath();
// console.log(mymath.Pi);
console.log(myMath.Pi);
const numbers = [-1,-2,-4];
console.log(myMath.max(...numbers));


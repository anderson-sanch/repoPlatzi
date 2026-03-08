import {Animal, Dog} from './09-protected';

// const animal = new Animal('Bior');
// animal.gretting();

const firulais = new Dog('Firulais','Anderson');
firulais.gretting();
firulais.bark(3);

// Las clases abstractas son plantillas que no se pueden instanciar directamente y pueden contener métodos abstractos (sin implementación) y métodos concretos (con implementación). Se utilizan para definir una interfaz común para un conjunto de clases que comparten comportamiento.

// Ejemplo:

// Clase abstracta: Animal

// Método abstracto: hacerSonido()
// Método concreto: dormir()
// Clases concretas: Perro y Gato que heredan de Animal y deben implementar hacerSonido().

// Usa clases abstractas cuando desees asegurar que todas las subclases implementen ciertos métodos, manteniendo una estructura organizada.

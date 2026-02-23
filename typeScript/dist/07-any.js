let myDynamicVar;
myDynamicVar = 42; // OK
myDynamicVar = "Hello, World!"; // OK
myDynamicVar = { name: "Alice", age: 30 }; // OK
myDynamicVar = 'anderson';
const rta = myDynamicVar.toUpperCase(); // OK, but be cautious with type assertions
const num = myDynamicVar + 10; // This will cause a runtime error since myDynamicVar is not a number
const obj = myDynamicVar.name; // This will also cause a runtime error since myDynamicVar is not an object with the expected shape
// To avoid runtime errors, it's important to check the type of myDynamicVar before performing operations on it
if (typeof myDynamicVar === 'string') {
    const upperCaseStr = myDynamicVar.toUpperCase();
    console.log(upperCaseStr);
}
else if (typeof myDynamicVar === 'number') {
    const incrementedNum = myDynamicVar + 10;
    console.log(incrementedNum);
}
export {};
// MALA PRACTICA

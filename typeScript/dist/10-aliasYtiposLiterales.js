"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userId;
let shirtSize;
shirtSize = "M"; // válido
shirtSize = "L"; // válido
shirtSize = "S"; // válido
// shirtSize = "XXL"; // Error: Type '"XXL"' is not assignable to type '"S" | "M" | "L" | "XL"'.
function greeting(name, size) {
    if (typeof name === "string") {
        console.log(`Hello, ${name.toLocaleUpperCase()}! Your shirt size is ${size}.`);
    }
    else if (typeof name === "number") {
        console.log(`Hello, user #${name.toFixed(2)}! Your shirt size is ${size}.`);
    }
}
greeting("Alice", 'XL');
greeting(42, "L");

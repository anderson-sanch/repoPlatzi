"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userId;
userId = "1";
userId = 1;
function greeting(name) {
    if (typeof name === "string") {
        console.log(`Hello, ${name}`);
    }
    else if (typeof name === "number") {
        console.log(`Hello, user #${name}`);
    }
}
greeting("Alice");
greeting(42);

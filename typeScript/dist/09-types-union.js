let userId;
userId = "1";
userId = 1;
function greeting(name) {
    if (typeof name === "string") {
        console.log(`Hello, ${name.toLocaleUpperCase()}`);
    }
    else if (typeof name === "number") {
        console.log(`Hello, user #${name.toFixed(2)}`);
    }
}
greeting("Alice");
greeting(42);
export {};

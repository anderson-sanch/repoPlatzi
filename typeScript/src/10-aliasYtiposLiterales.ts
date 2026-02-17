type UserID = string | number;

let userId: UserID;

function greeting(name: UserID) {
    if (typeof name === "string") {
        console.log(`Hello, ${name.toLocaleUpperCase()}`);
    } else if (typeof name === "number") {
        console.log(`Hello, user #${name.toFixed(2)}`);
    }
}

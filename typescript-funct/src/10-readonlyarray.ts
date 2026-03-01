const numbers: ReadonlyArray<number> = [1,2,3,4,5];
// numbers.push(6);
// numbers.push('7'); --- IGNORE ---
// numbers.push(true); --- IGNORE ---

const nuevoarray = numbers.filter(item => item > 2);
console.log(nuevoarray);
console.log(numbers);


const calcTotla = (prices: number[]): string => {
    let total = 0;
    prices.forEach(price => {
        total += price;
    });
    return total.toString();
}

const total = calcTotla([1,2,3,4,5,6,7,8,9,10]); // 55
console.log(total);

// funciones si retorno

const printTotal = (price: number[]): void => {
    let total = calcTotla(price);
    console.log('El total es: ', total);
}

const total2 = printTotal([1,2,3,4,5,6,7,8,9,10]); // El total es: 55
console.log(total2); // undefined
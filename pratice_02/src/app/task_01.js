const numbers = [-10, 20, -30, 40, -50];

// ans One
const positiveNumbers = numbers.filter(num => num > 0);
console.log("Remove negative "+ positiveNumbers);

// ans Two
const doubleNumbers = positiveNumbers.map(num => num*2);
console.log("Double the position number: "+doubleNumbers);

// ans three
const sum = doubleNumbers.reduce((acc, num) => acc + num, 0);
console.log("Total sum of them " + sum);
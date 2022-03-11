let num1 = 15.57895521; //number
let num2 = 2.5; //number

console.log(num1.toString() + num2);
console.log(typeof num1);
console.log(num1.toString(2));
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

let num3 = 0.7;
let num4 = 0.1;

num3 = ((num3 * 100) + (num4 * 100)) / 100;

console.log(num3);

num3 += num4;

console.log(num3)
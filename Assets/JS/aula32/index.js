 // Atribuição via desestruturação
 let a = 'A';
 let b = 'B';
 let c = 'C';

//[a, b, c] = [1, 2, 3];

const numeros = [1, 2, 3];

[a, b, c] = numeros; 

console.log(a, b, c); 
console.log('*********************************');

//     indice     0  1  2  3  4  5  6  7  8 
const numeros1 = [10, 20, 30, 40, 50 ,60 ,70, 80, 90];
//const primeiroNumero = numeros[0];

//console.log(primeiroNumero);

const [primeiroNumero, segundoNumero] = numeros1;

console.log(primeiroNumero, segundoNumero);

console.log('****************************************');

// rest - resto do array
// o rest pega tudo que não for declarado

const [primeiroNumero1, segundoNumero1, ...resto] = numeros1;
console.log(primeiroNumero1, segundoNumero1);
console.log(resto);
console.log('*********************************************');

// colocando valores vazios

const [um, , tres, , cinco, , sete] = numeros1;
console.log(um, tres, cinco);
console.log('*********************************');

// lista dentro de lista

//                     0          1          2
//                  0  1 2     0  1  2    0  1  2
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numeros2[1]);
console.log(numeros2[2][1]);







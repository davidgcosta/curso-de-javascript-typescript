// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// ++ para acrescentar 1 ao contador
// -- para decrementar 1 ao contador
// += colocar um numero apos para pular acrescentando
// -= colocar um numero apos para pular diminuindo

//for (let i = 0; i <= 50; i += 10) {
//    console.log(i);
//};
//console.log('...E agora acabou.');

//*************************************************
 //for (let i = 0; i <= 10; i++) {
//    const par = i % 2 ===0;
//    console.log(i, par);
//}

// usando estrutura ternária

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

//****************************************************** */

const frutas = ['Maça', 'Pêra', 'Uva', 'Kiwi', 'Abacate', 'Morango'];

for (let i = 0; i < frutas.length; i++) {
    //console.log(frutas[i]);
    console.log(`Índice ${i}`, frutas[i]);
}
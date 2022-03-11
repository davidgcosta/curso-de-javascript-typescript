// function saudacao(nome) {
//     // console.log('Bom dia!');
//     //console.log(`Bom dia ${nome}!`);
//     return `Bom dia ${nome}!`;// retornar o valor escrito aqui
// }

// // saudacao('Luiz');
// // saudacao('Maria');
// // saudacao('Felipe');
// const variavel = saudacao('Barry');
// console.log(variavel);

// é´possivel deixar um valor padrao em x e y
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(8, 82));
console.log(soma(5, 10));

// fazendo a raiz quadrada de um numero n
const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(9));


// Arrow Function: a mesma coisa que a função acima
// porem com menos linhas
const raizQuadrada = n => n ** 0.5;

console.log(raizQuadrada(25));
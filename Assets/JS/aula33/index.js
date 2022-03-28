// 

const pessoa = {
    nome: 'Barry',
    sobrenome: 'Canino',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 135
    }
};

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log('************************************');  

// const nome1 = pessoa.nome
// console.log(nome1);


// // atribuição via desestruturação

// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome);
console.log('********************************************');
const { nome, ...resto } = pessoa;
console.log(resto);

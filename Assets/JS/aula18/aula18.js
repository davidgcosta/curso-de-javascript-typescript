//é possivel alterar o valor dentro, mas NÃO POSSO REATRIBUIR VALOR.
// só se for LET
// const array = [1,2,3];
// array.push(4);
// array[0] = 'Barry';
// console.log(array);

//-------------------------------------------

// exemplo de criacao de 
// const nome01 = 'Barry';
// const sobrenome01 = 'Costa';
// const idade02 = '18'; 

// const nome02 = 'Rafaella';
// const sobrenome03 = 'Costa';
// const idade03 = '2';

//----------------------------------------------------


//usando o OBJETO para agrupar variaveis
// const pessoa1 = {
//     nome: 'Barry',
//     sobrenome: 'Costa',
//     idade: 15,
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

//-------------------------------------------------------------

// mais uma maneira de escrever

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade,
//     };
// }

// const pessoa1 = criaPessoa('Barry', 'Costa', 15);
// const pessoa2 = criaPessoa('Rafaella', 'Costa', 2);
// const pessoa3 = criaPessoa('Aline', 'Costa', 25);
// const pessoa4 = criaPessoa('Cece', 'Drake', 30);
// const pessoa5 = criaPessoa('Noel', 'Khan', 26);

// console.log(pessoa1.nome, pessoa2.nome);

//------------------------------------------------------

const pessoa1 = {
    nome: 'Barry',
    sobenome: 'Costa',
    idade: 15,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

     incrementaIdade() {
         this.idade++;
     }   
    
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
// THIS representa o objeto proximo

//----------------------------------------------------------


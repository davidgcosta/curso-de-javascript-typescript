
//            012345678910
const nome = 'Barry Costa'

//               0       1        2
const alunos = ['Luiz', 'Maria', 'João'];

// delete alunos[1];
// alunos[0] = 'Eduardo';
// alunos[3] = 'Luiza';
alunos.push('Barry'); // acrescenta no final do array
alunos.unshift('Rafaella');// acrescenta no inicio do array

const removido = alunos.pop();

// o JavaScript aceita qualquer tipo de dao no array
// porém a boa pratica diz que é melhor so colocar o mesmo tipo
// console.log(removido);
console.log(alunos); //todos os dados
// console.log(alunos[0]); // somente do indice 0
// console.log(alunos.length);// quantidade de itens
console.log(alunos.slice(0, 2));

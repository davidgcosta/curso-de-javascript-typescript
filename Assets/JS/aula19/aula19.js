/*
Primitivos (imutáveis) - string, number, boolen, undefined,
null (bigint, symbol)
os itens copiados viram realmente cópias

 
Referência (mutável) - aray, object, function
na refeência os elementos apontam para o mesmo local salvo
ao invés de copiar
*/



const a = {
    nome: 'Barry',
    sobrenome: 'Costa',
};

//  SPREAD - cria uma cópia e o elemento se torna independente
// do origianl copiado
const b = {...a};

a.nome = 'Rafaella';
console.log(a, b);
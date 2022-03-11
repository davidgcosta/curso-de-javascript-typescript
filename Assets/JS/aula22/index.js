/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> 
! -> NOT -> NÃO
*/

console.log(true && true && true && true);

const expressaoAnd = true && true && false && true;
const expressaoOr = true || true;
console.log(expressaoAnd);
console.log(expressaoOr + ' Essa expressão é verdadeira');

const usuario = 'Barry';
const senha = '123456';

let vaiLogar = usuario === 'Barry' && senha === '123456';
console.log(vaiLogar + ' Vai logar porque usuário e senha batem');

console.log(!true);
console.log(!!true);
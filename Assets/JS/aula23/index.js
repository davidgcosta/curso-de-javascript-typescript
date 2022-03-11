/*
&& -> false && true -> false "o malor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

Falsy -> fingem ser valor falso, emulam
o resto TUDO é considerado verdadeiro.
false
0
'' "" `` string vazia
null / undefined
NaN
*/

console.log('Barry' && 0 && 'Rafaella');


function falaOi() {
    return 'Oi';
}


let vaiExecutar = false;

console.log(vaiExecutar && falaOi());

let vaiExecutar2 = 'Barryzinho';

console.log(vaiExecutar2 && falaOi());

//--------------------------------------------------------

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); 

const a = 0;
const b = null;
const c = 'false';// esse é uma string, logo é true
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

//----------------------------------------------------

const a1 = 0;
const b1 = null;
const c1 = false;
const d1 = false;
const e1 = NaN;

console.log(a1 || b1 || 'Barryzinho' || c1 || d1 || e1);

// aqui todas as const criadas são falsas( ou falsy)
// e 'Barryzinho' é uma string, logo é true
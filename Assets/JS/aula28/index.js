// 01/01/1970 Timestamp unic ou época unix, quando foi criado. marco zero

// const data = new Date(0); // o ZERO ´r rm Milisegundo
// console.log(data.toString());

// Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília)
const dataHoje = new Date();
console.log(dataHoje);
console.log(dataHoje.toString());

// transformando 3 horas em milisegundos
const tresHoras = 60 * 60 * 3 * 1000;

// transformando 1 dia em milisegundos
const umDia = 60 * 60 * 24 * 1000;

const data2 = new Date(0 + tresHoras + umDia);
console.log(data2.toString());

// ano, mês, dia, hora, minuto, segundo
// em javascript começa do ZERO: janeiro = 0, fevereiro = 1, ...
const data3 =  new Date(2019, 3, 20, 15, 14, 27);
console.log(data3.toString());

// const data = new Date(2019, 3); ano, mes, dia, hora, minuto, seg, milisegundo
const data4 = new Date('2019-04-20- 20:20:59');
console.log('Dia', data4.getDate());
console.log('Mês', data4.getMonth());
console.log('Ano', data4.getFullYear());
console.log('Hora', data4.getHours());
console.log('Min', data4.getMinutes());
console.log('Seg', data4.getSeconds());
console.log('ms', data4.getMilliseconds());
console.log('Dia semana', data4.getDay());
console.log(Date.now());//data de agora em milesegundos a partir do marco zero unix

// resultado do Date.now no new Date dá a hora de agora 
const data5 = new Date(1646611255795);

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data6) { 
    const dia = zeroAEsquerda(data6.getDate());
    const mes = zeroAEsquerda(data6.getMonth() + 1); //mes de 0 a 11
    const ano = zeroAEsquerda(data6.getFullYear());
    const hora = zeroAEsquerda(data6.getHours());
    const min = zeroAEsquerda(data6.getMinutes());
    const seg = zeroAEsquerda(data6.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data6 = new Date();
const dataBrasil = formataData(data6);
console.log(dataBrasil);
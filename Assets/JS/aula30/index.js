// 1º opção

//const h1 = document.querySelector('.container h1');
//const data = new Date();
//h1.innerHTML = data.toString();

//----------------------------------------------------

//2º opção

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString( { dateStyle: 'full', timeStyle: 'full' });

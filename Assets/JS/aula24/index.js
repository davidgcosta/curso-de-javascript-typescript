const hora = 10;

if (hora <= 12) {
    console.log('Bom dia!');

    console.log(1 + 1);
}
//--------------------------------------------------------
/*
Entre o - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else if na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else
if (hora >= 0 && hora <=11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <=17) {
    console.log('Bom tarde');
} else if (hora >= 18 && hora <=23) {
    console.log('Bom noite');
} else {
    console.log('Olá');
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}

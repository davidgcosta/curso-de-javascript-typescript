 const verdadeira = true;

 // Let tem escopo de bloco [...bloco]
 // Var só em escopo de função
 // escopo da função é especial
  // se o var estver dentro da função, o console.log que estiver fora nao consegue usar esse var

 let nome = 'Barry';
 var nome2 = 'Brabão';

 if (verdadeira) {
     let nome = 'Elétrico';
     console.log(nome, nome2);
 
    if (verdadeira) {
        let nome = 'Outra coisa';
        //console.log('Ok');
        console.log(nome, nome2);
    }
 }

 function falaOi () {
     console.log('Oi');
 }

 falaOi();
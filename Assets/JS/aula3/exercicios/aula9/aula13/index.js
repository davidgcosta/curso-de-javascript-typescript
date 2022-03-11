let umaString = "Um texto";
let duasString = "O rato roeu a roupa do rei de roma"
console.log(umaString);
console.log(umaString[6]);
console.log(umaString[-1]);
console.log(umaString.charAt(4));
console.log(umaString.concat(' em um lindo dia.'))
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('Um'));
console.log(umaString.indexOf('Um' ));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.search('t')); //parecido com a ondexOf porem aceita expressao regular
console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.replace(/Um/, 'Outra')); //usando expressão regular.
console.log(duasString.replace(/r/g, '#'));
console.log(duasString.length);
console.log(duasString.slice(2, 5));
console.log(duasString.slice(2, 6));
console.log(duasString.slice(-3));
console.log(duasString.slice(31));
console.log(duasString.split(''));
console.log(duasString.split('', 3));
console.log(duasString.toUpperCase());
console.log(duasString.toLowerCase());
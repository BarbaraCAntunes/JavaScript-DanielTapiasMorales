// strings, number (inteiros e floats - decimais), boolean,

let string = 'Barbara';
// string não pode começar com números, letras maiúsculas e caracteres especiais.
// Pode _ e $

//concatenação de variáveis

let idade = 30;
let msg = 'O cliente tem ' + idade + ' anos.';
console.log(msg);

// forma nova de concatenar:

let idade2 = 40;
let msg2 = `O cliente tem ${idade2} anos.`;
console.log(msg2);

// typeof
console.log(typeof msg2, typeof idade2, '...', 20);

// number

const n1 = 10;
const n2 = 1.1;
console.log(`O tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`O tipo de n1 é ${typeof n2} e seu valor é ${n2}`);

// boolean
const valid = true;
const valid2 = false;

// undefined, null e symbol
let testUndefined;
console.log(testUndefined);
console.log(typeof testUndefined);

let testNull = null; // o tipo retorna object por um erro de implementação do JS
console.log(typeof testNull, testNull);

// O JS faz a conversão de tipos. Menos com o operador '+' pq é usado pra concatenar
// toda informação que é digitada pelo usuário vem como string
// qdo for fazer operação matemática, converter para número
parseFloat, parseInt, Number();

let n1 = '10';
n1 = parseInt(n1);
let n2 = '2.58566684986400';
n2 = parseFloat(n2);
console.log(n1, n2);
// parseInt e parseFloat só consegue converter se os primeiros caracteres forem
// numeros. Se tiver letra antes retorna NaN. Se tiver letra e numeros depois
// não tem problema
let n3 = '14';
n3 = Number(n1);
// number só funciona se só tiver números. Senão retorna NaN.

// conversão de número para string
let n4 = 27;
n4 = n4.toString();
console.log(n4, typeof n4);

// decimais - 0 ate 9
// hexadecimais - 0 ate f (15)
// o que fica dentro do parenteses do toString é a base. Sem nada é decimal

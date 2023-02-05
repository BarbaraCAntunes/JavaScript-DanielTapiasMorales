function somar(n1 = 0, n2 = 0) {
  return n1 + n2;
}

let soma = somar(3, 5);

console.log(soma);
console.log(somar(10, 4));
alert(somar(2, 3));
// se passar mais parametros do que foi criado não tem problema
// se passar menos parametros do que foi criado não vai dar certo 
// usar o = 0 para dar um valor padrão e não dar erro 
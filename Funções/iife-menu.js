(function (n1, n2, n3) {
  let isValid = true;
  console.log('Init menu', isValid, n1, n2, n3);
})(1, 2, 3);
// esta função anônima é autoexecutável 
// pode criar funções não anônimas dentro de funções anônimas para não subescrever
// quando tiver dois ou mais scripts. 
// Gera-se um escopo isolado de cada arquivo 
// pode passar parametros dentro dos parentesis da função anonima 
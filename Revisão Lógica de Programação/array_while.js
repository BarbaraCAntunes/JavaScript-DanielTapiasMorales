// criar um array com numeros randomicos não repetidos
Math.random(); // de 01 ate 1
function generateRandomNumber(max) {
  return parseInt(Math.random() * max);
}

let arr = [];
while (arr.length <= 20) {
  let randomNumber = generateRandomNumber(30);
  console.log(randomNumber);
  if (arr.indexOf(randomNumber < 0)) {
    arr.push(randomNumber);
  }
}
console.log(arr);

// let teste = [1, 2, 3];
// para saber qual o índice do número que vc quer
// se o valor não existir, retorna -1
// retorna sempre a primeira ocorrência
// teste.indexOf(2);
// teste.lastIndexOf(2);

let arr = [1, 2, 3];
console.log(arr.reverse()); // modifica a array original

// reduce - retorna sempre um único valor
let soma = arr.reduce(function (acumulador, atual) {
  return acumulador + atual; // ac = indice 0 e atual = indice 1. Depois, acumulador é o resultado do primeiro e o atual o indice 2....
}); // se colocar o zero o primeiro acumulador passa a ser 0.
console.log(soma);

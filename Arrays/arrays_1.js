// verificar se são todos de um tipo - Every. Retorna true se todos forem true.
const arr = [1, 1, 5, 10, 'Olá', true];
let onlyNumbers = arr.every(function (el) {
  return typeof el === 'number';
});
console.log(onlyNumbers);
// verificar se pelo menos alguns são de um tipo - some. Retorna true se alguns forem true
let someNumbers = arr.some(function (el) {
  return typeof el === 'number';
});
console.log(someNumbers);
// filtro - não altera o array original. Retorna uma nova array.
let arr1 = arr.filter(function (el, i, _arr) {
  return typeof el === 'number';
});
// forEach - não altera array original. Não tem valor de retorno. Loop.
const arr2 = arr.forEach(function (_arr, el, i) {});
// map. Altera array original. Transforma.
arr1.map(function (el, i, _arr) {
  return el * el;
});

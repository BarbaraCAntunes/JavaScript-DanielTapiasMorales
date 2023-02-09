// function somar (n1, n2) {
//   return n1 + n2
// }
// console.log(somar(1,2)) - Definiu a quantia de parâmetros

// exemplo de function declaration
function somar(params) {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(somar(1, 2, 3, 4, 5, 6, 7)); //pode por quantos números quiser
// arguments não existem em arrow funcrtion. Só em function declaration e function expression

// exemplo de function expression
const somar2 = function (params) {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};
console.log(somar2(1, 2, 3, 4, 5, 6, 7));

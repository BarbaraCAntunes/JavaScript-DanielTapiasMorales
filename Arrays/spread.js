const arr = [1, 2, 3];
// para usar os itens do array como argumento de uma função. O ... quebra o array.
function sum() {
  console.log(arguments);
  console.log(arguments.length);
}
sum(...arr);

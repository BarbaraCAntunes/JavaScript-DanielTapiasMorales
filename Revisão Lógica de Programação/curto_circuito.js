// curto circuito
let n = 0;
// if (n === 0) {
//   n = 10;
// }
n = n || 10;
console.log(n);

// outro exemplo
let isValid = true;
// if (isValid) {
//   console.log('É válido');
// }
isValid && console.log('É válido');

let arr = [4, 5, 10, 20, 35, 4, 5];
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));

console.log(arr.includes(5));
// fid - retorna o primeiro elemento true. Se não encontrar nada, retorna undefined.
console.log(
  arr.find(function (el) {
    return el > 10;
  })
);
//findIndex - retorna o indice do primeiro elemento true. Else retorna -1. 
console.log(
  arr.findIndex(function (el) {
    return el > 10;
  })
);

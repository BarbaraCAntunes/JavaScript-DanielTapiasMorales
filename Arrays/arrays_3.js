let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.toString());
console.log(arr1.join(' - ')); // Utiliza o parametro como separador dos elementos.
let arr3 = arr1.concat(arr2, 48, 52); // n altera array original
console.log(arr3);

// criar cópia de array
let arr4 = [].concat(arr3);

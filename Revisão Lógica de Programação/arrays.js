const arr = new Array(); // o tipo é objeto
arr[0] = 'Barbara';
arr[2] = 31;
console.log(arr);

const arr2 = new Array('Baloo', 3, new Array('Paçoca'));
console.log(arr2[0]);
console.log(arr2[2][0]);

// quantos elementos tem o Array
console.log(arr2.length - 1);

// sintaxe literal - mais usada
const arr4 = ['Daniel', 31, true, ['Baloo', 31]];
console.log(arr4[3][0]);
// adicionar itens
arr4[4] = 'Nino';
console.log(arr4[4]);
// acrescentar no fim
arr4[arr4.length] = 'novo valor';
arr4.push('push', 'puxe');
console.log(arr4);

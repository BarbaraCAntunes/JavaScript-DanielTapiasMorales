let arr = [1, 3, 5, 7, 9];
arr.push(11, 13, true, 'Olá Mundo'); // adiciona elemento no último lugar
arr.unshift('oi'); // - adiciona elemento no primeiro lugar
console.log(arr.pop(arr)); // retira o último e mostra qual era
arr.shift(); // retira o primeiro e mostra qual era

let arr2 = arr.slice(2, 4); // vai recortar a partir do indice 2 até o 4. 2 inclui, 4 não.
let arr3 = arr.splice(2, 4, "ola"); // retira 4 itens a partir do indice 2 e retorna os elementos removidos.
// Adiciona o terceiro. 
console.log(arr, arr3);

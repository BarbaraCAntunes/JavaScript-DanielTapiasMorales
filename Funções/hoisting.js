// hoisting - capacidade do JS de "içar" uma function declaration
teste(); // foi chamado antes

function teste(params) {
  console.log('Teste');
}
teste2(); // não funciona pq não é uma function declaration
const teste2 = function teste2(params) {
  console.log('teste2');
};

console.log(minhaVar); // as variáveis são inicializadas, mas sua atribuição não
var minhaVar = 'variável'; // valor undefined 
// o hoisting só vai funcionar com var. Não funciona com const e let. 

// var, let e const
// var -> ES5 - cross-browser - funciona em todos os browsers
// let e const -> ES2015 -quase todos já suportam
// JS é uma linguagem fracamente tipada. Pode reatribuir valor de outro tipo.

let teste = 'teste';
teste = 10;
console.log(teste);

// let não permite recriar a variável. Garante que a mesma variável não seja
// declarada duas vezes. Pode reatribuir valor. Pode criar sem valor.
let teste = 10;

const teste2 = 20;
// const não permite reatribuir valores. Não pode criar sem valor.
teste2 = 15;
console.log(teste2);

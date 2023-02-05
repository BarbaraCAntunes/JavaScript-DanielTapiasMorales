function sum(n1, n2) {
  if (typeof n1 !== Number || typeof n2 !== Number) {
    throw Error('Apenas números!');
  }
  return n1 + n2;
}

// let soma = sum(3, 'a');
// console.log(soma);
// dentro do try catch só o que pode dar erro
// quando o código da erro, o JS para inteiro na mesma hora
// se usar o try catch o JS não para
let soma = '';
try {
  soma = sum(3, 'a');
} catch (e) {
  alert('Ocorreu um erro');
  console.log(e);
} finally {
  console.log('Executa quando deu erro ou não');
}

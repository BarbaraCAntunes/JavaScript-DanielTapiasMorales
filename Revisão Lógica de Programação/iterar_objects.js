const pessoa = {
  nome: 'Maria',
  idade: 31,
  email: 'maria@hotmail.com',
};
console.log(pessoa);

//mostra as propriedades
for (let prop in pessoa) {
  console.log(prop);
}

// mostra o valor
console.log(pessoa[prop]);

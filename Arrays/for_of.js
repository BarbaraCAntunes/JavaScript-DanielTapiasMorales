const arr = [1, 2, 3];

const obj = {
  nome: 'Maria',
  idade: 28,
  profissão: 'desenvolvedora',
};
// for in serve para objeto
for (let prop in obj) {
  console.log(obj[prop]);
}

// for of - mostra diretamente os valores do array
for (n of arr) {
  console.log(n);
}

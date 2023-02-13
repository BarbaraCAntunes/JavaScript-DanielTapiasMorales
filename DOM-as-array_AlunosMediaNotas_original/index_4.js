(function () {
  const alunos = [
    { nome: 'Daniel', notas: [10, 3, 7.5, 3] },
    { nome: 'Maria', notas: [10, 9, 3, 9.5] },
    { nome: 'João', notas: [10, 4.5, 1, 3.5] },
    { nome: 'Joana', notas: [1, 3, 9, 1.5] },
    { nome: 'José', notas: [10, 4.5, 7, 3] },
    { nome: 'Arnaldo', notas: [10, 4.5, 7, 3] },
    { nome: 'Lucas', notas: [4.5, 9, 8, 3] },
    { nome: 'Luana', notas: [3, 7, 9, 3] },
    { nome: 'Beatriz', notas: [10, 4, 7, 9] },
    { nome: 'Sergio', notas: [4.5, 9.5, 10, 2] },
  ];

  function sum() {
    const numbers = [...arguments];
    return numbers.reduce(function (sum, atual) {
      return sum + atual;
    }, 0);
  }
  function average() {
    return sum(...arguments) / arguments.length;
  }

  alunos.forEach((aluno) => {
    aluno.media = average(...aluno.notas);
  });

  const html = alunos
    .map(
      (aluno) => `
    <tr class = " ${aluno.media < 7 ? 'reproved' : 'aproved'}">
      <td>${aluno.nome}</td>
      <td>${aluno.notas[0]}</td>
      <td>${aluno.notas[1]}</td>
      <td>${aluno.notas[2]}</td>
      <td>${aluno.notas[3]}</td>
      <td>${aluno.media.toFixed(2)}</td>
    </tr>
  `
    )
    .join('');
  document.querySelector('tbody').innerHTML = html;
})();

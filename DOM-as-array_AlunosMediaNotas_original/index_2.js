(function () {
  const trHeader = document.querySelector('thead tr');
  const thsHeader = document.querySelectorAll('th');
  const thsAlunoNotas = trHeader.querySelectorAll('[aluno-nota]');
  const indice_notas = {};
  Array.from(thsAlunoNotas).forEach(function (th) {
    let prop = th.getAttribute('aluno-nota');
    indice_notas[prop] = pegaIndice(prop);
  });

  function pegaIndice(indice) {
    const th = trHeader.querySelector(`[aluno-nota= "${indice}"]`);
    const i = Array.from(thsHeader).indexOf(th);
    return i;
  }

  const trs = document.querySelectorAll('tbody tr');

  let x = 0;
  let media = 0;

  function sum() {
    const numbers = [...arguments];
    return numbers.reduce(function (sum, atual) {
      return sum + atual;
    }, 0);
  }
  function average() {
    return sum(...arguments) / arguments.length;
  }

  while (trs[x]) {
    const tds = trs[x].querySelectorAll('td');
    media = average(
      parseFloat(tds[indice_notas.n1].textContent),
      parseFloat(tds[indice_notas.n2].textContent),
      parseFloat(tds[indice_notas.n3].textContent),
      parseFloat(tds[indice_notas.n4].textContent)
    );
    x++;
    tds[indice_notas.media].textContent = media;
  }
})();

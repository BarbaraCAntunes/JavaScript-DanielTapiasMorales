(function () {
  function pegaIndice(indice) {
    const trHeader = document.querySelector('thead tr');
    const thsHeader = document.querySelectorAll('th');
    const th = trHeader.querySelector(`[aluno-nota= "${indice}"]`);
    const i = Array.from(thsHeader).indexOf(th);
    return i;
  }
  const indice_notas = {
    n1: pegaIndice('n1'),
    n2: pegaIndice('n2'),
    n3: pegaIndice('n3'),
    n4: pegaIndice('n4'),
    media: pegaIndice('media'),
  };

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

const produto = {
  nome: 'caneta',
  qtd: 10,
  comprar: function (n) {
    if (n > produto.qtd) {
      console.log('Quantidade não disponível');
    } else {
      produto.qtd -= n;
    }
  },
};

produto.comprar(12);
// produto.comprar(5);
console.log(produto);

// while
let numero = prompt('Digite um número:');

let indice = 0;
while (indice <= 10) {
  document.write(`${indice} x ${numero} = ${indice * numero} <br>`);
  indice++;
}

// for

for (let j = 0; j <= 10; j++) {
  document.write(`${j} x ${numero} = ${j * numero} <br>`);
}

// do while - quando precisa que o código seja executado ao menos uma vez

do {
  document.write(`${indice} x ${numero} = ${indice * numero} <br>`);
  indice++
} while (indice <= 10);

// para sair do loop usar o break 
// continue pula um e mostra o próximo

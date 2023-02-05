let idade = 15;
let paisPresentes = false;
let comprouBilhete = true;
constPodeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

if (comprouBilhete) {
  console.log('Sim, comprou o bilhete.');
} else {
  console.log('Não comprou o bilhete.');
}
//operador ternário
let msgMaiorIdade = idade >= 18 ? 'É maior de idade' : 'É menor de idade';
console.log(msgMaiorIdade);

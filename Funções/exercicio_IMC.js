(function () {
  function imc(peso = 0, altura = 0) {
    if (typeof peso !== 'number' || typeof altura !== 'number') {
      throw Error('Digite apenas números');
    }
    return peso / (altura * altura);
  }
  let imc_media = imc(98, 1.89);
  console.log(imc_media.toFixed(2));
  function tabela() {
    if (imc_media <= 16.9) {
      console.log(`Seu IMC: ${imc_media.toFixed(2)} kg/m2. Você está muito abaixo do peso.`);
    } else if (imc_media <= 18.4) {
      console.log(`Seu IMC: ${imc_media.toFixed(2)} kg/m2. Você está abaixo do peso.`);
    } else if (imc_media <= 24.9) {
      console.log(`Seu IMC: ${imc_media.toFixed(2)} kg/m2. Você está com peso normal.`);
    } else if (imc_media <= 29.9) {
      console.log(`Seu IMC: ${imc_media.toFixed(2)} kg/m2. Você está acima do peso.`);
    } else if (imc_media <= 34.9) {
      console.log(`Seu IMC: ${imc_media.toFixed(2)} kg/m2. Você está com obesidade grau I.`);
    } else if (imc_media <= 40) {
      console.log(`Seu IMC: ${imc_media.toFixed(2)} kg/m2. Você está com obesidade grau II.`);
    } else console.log(`Seu IMC: ${imc_media.toFixed(2)} kg/m2. Você está com obesidade grau III`);
  }
  tabela(imc_media);
})();

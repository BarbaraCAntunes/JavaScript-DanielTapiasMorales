function imc(peso, altura, cb) {
  if (typeof cb === 'function') {
    cb();
  } else if (typeof peso !== 'number' || typeof altura !== 'number') {
    throw Error('Digite apenas números.');
  } else {
    console.log((peso / (altura * altura)).toFixed(2));
  }
}

function callback() {
  console.log('Tinha callback');
}

imc(60, 1.65, callback);

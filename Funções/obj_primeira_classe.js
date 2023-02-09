function fn(cb) {
  console.log('executar ação de callback');
  console.log(typeof cb);
  cb();
}

// fn(function () {
//   console.log('função passada por parâmetro');
// });
// ou

function callback(params) {
  console.log('função passada por parâmetro');
}

fn(callback);

const obj = {
  callback,
};
obj.callback();

// JS trata funções como objetos

// pode retornar função como resultado de outra função

function fn3() {
  fn3.count++;
  return function () {
    console.log('Função retornada por parâmetro');
  };
}

const funcao3 = fn3();
funcao3();

// pode adicionar coisas como objeto
fn3.count = 5;
console.log(fn3.count);

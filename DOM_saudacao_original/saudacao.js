// (function () {
//   const nomeUsuario = null;
//   const elemento = document.querySelector('.top-bar p');
//   if (nomeUsuario) {
//     elemento.innerHTML += `<strong>${nomeUsuario}</strong>!`;
//   } else {
//     // elemento.parentElement.style.display = 'none'; //childrenElement
//     // elemento.remove();// n funciona no IE
//     const elementoRemover = elemento.parentElement;
//     elementoRemover.parentElement.removeChild(elementoRemover);
//   }
// })();
// // text content não entende tags HTML. innerHTML entende. Essa é a diferença.

// remover/esconder elementos HTML não é efetivo. Então se cria elementos no JS.
(function () {
  const nomeUsuario = 'Barbara';
  if (nomeUsuario) {
    const topBarElemento = document.createElement('div');
    topBarElemento.className = 'top-bar';
    topBarElemento.innerHTML = `<p> Olá, <strong> ${nomeUsuario}</strong>!</p>`;
    const elementoPai = document.querySelector('.hero');
    elementoPai.insertBefore(topBarElemento, elementoPai.firstChild);
  }
})();

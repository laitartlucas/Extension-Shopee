chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'PREENCHER_FORMULARIO') {
    preencherFormulario(msg.dados);
    sendResponse({ ok: true });
  }
});

function setReactValue(el, value) {
  el.focus();
  const lastValue = el.value;
  const tracker = el._valueTracker;
  if (tracker) tracker.setValue(lastValue);
  const nv = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
  nv.set.call(el, value);
  el.dispatchEvent(new Event('input', { bubbles: true }));
  el.dispatchEvent(new Event('change', { bubbles: true }));
  el.blur();
}

function encontrar(placeholder) {
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    if ((inputs[i].placeholder || '').toLowerCase().includes(placeholder.toLowerCase())) {
      return inputs[i];
    }
  }
  return null;
}

function preencherFormulario(dados) {
  const nome = encontrar('Nome Completo');
  if (!nome) { setTimeout(() => preencherFormulario(dados), 500); return; }

  setReactValue(nome, dados.nome);

  const tel = encontrar('Número de Telefone');
  if (tel) setReactValue(tel, dados.telefone);

  // CEP — digita caractere por caractere para acionar a busca
  const cep = encontrar('CEP');
  if (cep) {
    cep.focus();
    const tracker = cep._valueTracker;
    if (tracker) tracker.setValue('');
    const nv = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
    nv.set.call(cep, dados.cep);
    cep.dispatchEvent(new Event('input', { bubbles: true }));
    cep.dispatchEvent(new Event('change', { bubbles: true }));
    cep.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: dados.cep.slice(-1) }));
  }

  // Aguarda CEP carregar o endereço e preenche o resto
  setTimeout(() => {
    const rua = encontrar('Rua / Avenida');
    if (rua) setReactValue(rua, dados.rua);

    const bairro = encontrar('Bairro');
    if (bairro) setReactValue(bairro, dados.bairro);

    const comp = encontrar('Complemento');
    if (comp) setReactValue(comp, dados.complemento);

    const numeros = document.querySelectorAll('input[placeholder="Número"]');
    if (numeros.length > 0) setReactValue(numeros[numeros.length - 1], dados.numero);
  }, 2500);
}

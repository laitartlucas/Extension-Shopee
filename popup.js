let dadosAtuais = null;

// Carrega último cliente usado
chrome.storage.local.get('shopee_dados', (r) => {
  if (r.shopee_dados && r.shopee_dados.nome) {
    dadosAtuais = r.shopee_dados;
    mostrarInfo(dadosAtuais);
  }
});

// Quando colar o link, lê os dados automaticamente
document.getElementById('link-input').addEventListener('input', function() {
  const url = this.value.trim();
  if (!url.includes('?')) return;
  try {
    const p = new URLSearchParams(url.split('?')[1]);
    if (!p.get('nome')) return;
    dadosAtuais = {
      nome:        p.get('nome') || '',
      telefone:    p.get('telefone') || '',
      cep:         p.get('cep') || '',
      rua:         p.get('rua') || '',
      numero:      p.get('numero') || '',
      bairro:      p.get('bairro') || '',
      complemento: p.get('complemento') || ''
    };
    chrome.storage.local.set({ shopee_dados: dadosAtuais });
    mostrarInfo(dadosAtuais);
    document.getElementById('aviso').style.display = 'none';
  } catch(e) {}
});

function mostrarInfo(d) {
  const el = document.getElementById('info');
  el.style.display = 'block';
  el.innerHTML = '<strong>' + d.nome + '</strong><br>' + d.rua + ', ' + d.numero + '<br>CEP: ' + d.cep;
}

document.getElementById('btn-preencher').addEventListener('click', () => {
  if (!dadosAtuais || !dadosAtuais.nome) {
    const av = document.getElementById('aviso');
    av.style.display = 'block';
    av.textContent = '⚠️ Cole o link do pedido primeiro!';
    return;
  }
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'PREENCHER_FORMULARIO', dados: dadosAtuais }, () => {
      document.getElementById('msg').style.display = 'block';
      setTimeout(() => window.close(), 1500);
    });
  });
});

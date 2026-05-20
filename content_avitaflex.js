// Roda na página avitaflex.com/envio e salva os dados no storage da extensão
const p = new URLSearchParams(window.location.search);
if (p.get('nome')) {
  const dados = {
    nome:        p.get('nome') || '',
    telefone:    p.get('telefone') || '',
    cep:         p.get('cep') || '',
    rua:         p.get('rua') || '',
    numero:      p.get('numero') || '',
    bairro:      p.get('bairro') || '',
    complemento: p.get('complemento') || ''
  };
  chrome.storage.local.set({ shopee_dados: dados }, () => {
    console.log('Shopee Preenchedor: dados salvos para', dados.nome);
  });
}

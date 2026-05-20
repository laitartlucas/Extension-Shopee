chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'SALVAR_DADOS') {
    chrome.storage.local.set({ shopee_dados: msg.dados }, () => {
      sendResponse({ ok: true });
    });
    return true;
  }
  if (msg.type === 'PREENCHER') {
    chrome.storage.local.get('shopee_dados', (result) => {
      sendResponse({ dados: result.shopee_dados || null });
    });
    return true;
  }
});

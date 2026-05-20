# 🛒 Shopee Preenchedor de Endereço — Extensão Chrome

Extensão para Google Chrome que preenche automaticamente o formulário de endereço na Shopee a partir de um link com os dados do cliente. Desenvolvida para agilizar o processo de compra no dropshipping, eliminando a digitação manual de nome, telefone, CEP, rua, número, bairro e complemento.

---

## ✨ Como funciona

1. A automação ([Luna Automation](https://github.com/laitartlucas/luna-automation)) envia no WhatsApp um link contendo todos os dados do cliente como parâmetros na URL
2. Você cola esse link no popup da extensão
3. Clica em **⚡ Preencher Endereço**
4. A extensão preenche todo o formulário da Shopee automaticamente
5. Só confirmar a compra

```
Link do pedido → Extensão → Formulário Shopee preenchido
```

---

## 📋 Dados preenchidos automaticamente

- Nome completo
- Telefone
- CEP
- Rua / Avenida
- Número
- Bairro
- Complemento

---

## 🗂️ Estrutura do Projeto

```
shopee-extension/
├── manifest.json          # Configurações da extensão (Manifest V3)
├── popup.html             # Interface do popup
├── popup.js               # Lógica do popup (leitura do link e envio)
├── content.js             # Script injetado na Shopee (preenche o formulário)
├── content_avitaflex.js   # Script para captura de dados via avitaflex.com
└── background.js          # Service worker (gerencia storage e mensagens)
```

---

## 🚀 Instalação

Como a extensão não está publicada na Chrome Web Store, a instalação é feita em modo desenvolvedor:

1. Baixe ou clone este repositório
2. No Chrome, acesse `chrome://extensions/`
3. Ative o **Modo do desenvolvedor** (canto superior direito)
4. Clique em **Carregar sem compactação**
5. Selecione a pasta `shopee-extension`

A extensão aparecerá na barra do Chrome pronta para uso.

---

## ▶️ Como usar

### 1. Com o link da automação (recomendado)

O link gerado pela [Luna Automation](https://github.com/laitartlucas/luna-automation) vem no formato:

```
https://avitaflex.com/envio/?nome=João Silva&telefone=11999999999&cep=01310100&rua=Av. Paulista&numero=1000&bairro=Bela Vista&complemento=Apto 42
```

1. Abra a página de checkout na Shopee
2. Clique no ícone da extensão na barra do Chrome
3. Cole o link no campo indicado
4. Os dados do cliente serão exibidos para confirmação
5. Clique em **⚡ Preencher Endereço**

### 2. Colando o link diretamente

Também é possível colar qualquer URL com os parâmetros no formato acima diretamente no popup, sem precisar acessar o avitaflex.com.

---

## 🔗 Formato do link

Os dados do cliente devem estar na URL como query parameters:

| Parâmetro | Descrição | Exemplo |
|-----------|-----------|---------|
| `nome` | Nome completo | `João Silva` |
| `telefone` | Telefone com DDD | `11999999999` |
| `cep` | CEP sem traço | `01310100` |
| `rua` | Rua ou Avenida | `Av. Paulista` |
| `numero` | Número do endereço | `1000` |
| `bairro` | Bairro | `Bela Vista` |
| `complemento` | Complemento (opcional) | `Apto 42` |

---

## 🛠️ Tecnologias

- JavaScript (Vanilla)
- Chrome Extensions API — Manifest V3
- Chrome Storage API
- Chrome Scripting API

---

## 🔒 Permissões utilizadas

| Permissão | Motivo |
|-----------|--------|
| `storage` | Salvar os dados do último cliente para reutilização |
| `activeTab` | Acessar a aba ativa da Shopee |
| `scripting` | Injetar o script de preenchimento na página |
| `tabs` | Enviar mensagem para o content script da aba |

---

## 🤝 Parte do ecossistema

Esta extensão foi desenvolvida para funcionar em conjunto com a **Luna Automation**:

- 🤖 [Luna Automation](https://github.com/laitartlucas/luna-automation) — lê pedidos no Google Sheets, verifica pagamento na Luna Checkout e envia o link com os dados do cliente via WhatsApp
- 🧩 **Esta extensão** — recebe o link e preenche o formulário da Shopee automaticamente

---

## 📄 Licença

MIT

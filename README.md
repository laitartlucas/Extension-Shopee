🛒 Shopee Preenchedor de Endereço — Extensão Chrome

Extensão para Google Chrome que preenche automaticamente o formulário de endereço na Shopee a partir de um link com os dados do cliente. Desenvolvida para agilizar o processo de compra no dropshipping, eliminando a digitação manual de nome, telefone, CEP, rua, número, bairro e complemento.

✨ Como funciona

A automação (Luna Automation) envia no WhatsApp um link contendo todos os dados do cliente como parâmetros na URL
Você cola esse link no popup da extensão
Clica em ⚡ Preencher Endereço
A extensão preenche todo o formulário da Shopee automaticamente
Só confirmar a compra

Link do pedido → Extensão → Formulário Shopee preenchido

📋 Dados preenchidos automaticamente

Nome completo
Telefone
CEP
Rua / Avenida
Número
Bairro
Complemento


🗂️ Estrutura do Projeto
shopee-extension/
├── manifest.json          # Configurações da extensão (Manifest V3)
├── popup.html             # Interface do popup
├── popup.js               # Lógica do popup (leitura do link e envio)
├── content.js             # Script injetado na Shopee (preenche o formulário)
├── content_avitaflex.js   # Script para captura de dados via avitaflex.com
└── background.js          # Service worker (gerencia storage e mensagens)

🚀 Instalação
Como a extensão não está publicada na Chrome Web Store, a instalação é feita em modo desenvolvedor:

Baixe ou clone este repositório
No Chrome, acesse chrome://extensions/
Ative o Modo do desenvolvedor (canto superior direito)
Clique em Carregar sem compactação
Selecione a pasta shopee-extension

A extensão aparecerá na barra do Chrome pronta para uso.

▶️ Como usar
1. Com o link da automação (recomendado)
O link gerado pela Luna Automation vem no formato:
https://avitaflex.com/envio/?nome=João Silva&telefone=11999999999&cep=01310100&rua=Av. Paulista&numero=1000&bairro=Bela Vista&complemento=Apto 42

Abra a página de checkout na Shopee
Clique no ícone da extensão na barra do Chrome
Cole o link no campo indicado
Os dados do cliente serão exibidos para confirmação
Clique em ⚡ Preencher Endereço

2. Colando o link diretamente
Também é possível colar qualquer URL com os parâmetros no formato acima diretamente no popup, sem precisar acessar o avitaflex.com.

🔗 Formato do link
Os dados do cliente devem estar na URL como query parameters:
ParâmetroDescriçãoExemplonomeNome completoJoão SilvatelefoneTelefone com DDD11999999999cepCEP sem traço01310100ruaRua ou AvenidaAv. PaulistanumeroNúmero do endereço1000bairroBairroBela VistacomplementoComplemento (opcional)Apto 42

🛠️ Tecnologias

JavaScript (Vanilla)
Chrome Extensions API — Manifest V3
Chrome Storage API
Chrome Scripting API


🔒 Permissões utilizadas
PermissãoMotivostorageSalvar os dados do último cliente para reutilizaçãoactiveTabAcessar a aba ativa da ShopeescriptingInjetar o script de preenchimento na páginatabsEnviar mensagem para o content script da aba

🤝 Parte do ecossistema
Esta extensão foi desenvolvida para funcionar em conjunto com a Luna Automation:

🤖 Luna Automation — lê pedidos no Google Sheets, verifica pagamento na Luna Checkout e envia o link com os dados do cliente via WhatsApp
🧩 Esta extensão — recebe o link e preenche o formulário da Shopee automaticamente

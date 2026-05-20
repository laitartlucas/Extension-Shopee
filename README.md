# Shopee Preenchedor de Endereço

Extensão do Chrome que preenche automaticamente o formulário de endereço na Shopee com os dados do cliente, evitando digitação manual a cada pedido.

## Como funciona

O fluxo principal é:

1. Um link com os dados do cliente é gerado pela planilha (ou pelo sistema avitaflex.com)
2. O usuário cola esse link no popup da extensão
3. A extensão preenche todos os campos do formulário de endereço na Shopee com um clique

## Instalação

1. Acesse `chrome://extensions` no Chrome
2. Ative o **Modo do desenvolvedor** (canto superior direito)
3. Clique em **Carregar sem compactação**
4. Selecione a pasta desta extensão

## Uso

### Via popup (manual)

1. Abra a página de cadastro de endereço na Shopee
2. Clique no ícone da extensão na barra do Chrome
3. Cole o link do pedido gerado pela planilha no campo de texto
4. Os dados do cliente aparecerão em prévia
5. Clique em **Preencher Endereço**

### Via avitaflex.com (automático)

Ao acessar `avitaflex.com/envio/` com os parâmetros do cliente na URL, a extensão salva os dados automaticamente. Depois é só abrir o formulário na Shopee e clicar em **Preencher Endereço**.

## Formato do link

O link deve conter os seguintes parâmetros na query string:

```
?nome=João Silva&telefone=11999999999&cep=01310100&rua=Av. Paulista&numero=1000&bairro=Bela Vista&complemento=Apto 42
```

| Parâmetro    | Descrição              |
|--------------|------------------------|
| `nome`       | Nome completo          |
| `telefone`   | Número de telefone     |
| `cep`        | CEP (somente números)  |
| `rua`        | Rua / Avenida          |
| `numero`     | Número                 |
| `bairro`     | Bairro                 |
| `complemento`| Complemento (opcional) |

## Arquivos

| Arquivo              | Função                                                              |
|----------------------|---------------------------------------------------------------------|
| `manifest.json`      | Configuração da extensão (permissões, versão, scripts)              |
| `popup.html`         | Interface do popup                                                  |
| `popup.js`           | Lê o link colado, exibe prévia e dispara o preenchimento            |
| `content.js`         | Roda na Shopee; preenche os campos do formulário React              |
| `content_avitaflex.js` | Roda no avitaflex.com; captura e salva os dados da URL           |
| `background.js`      | Service worker; gerencia o armazenamento local dos dados            |

## Observações técnicas

- O formulário da Shopee usa React, então o preenchimento simula eventos nativos do DOM para que o React reconheça os valores
- O campo CEP dispara um evento `keyup` para acionar a busca automática de endereço
- Após digitar o CEP, a extensão aguarda 2,5 segundos antes de preencher os demais campos (rua, bairro, número, complemento), tempo necessário para a Shopee carregar o endereço

## Versão

1.2

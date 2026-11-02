# Wanderley & Mitiko — site do casamento

Site estático em HTML, CSS, JavaScript e Bootstrap 5.3.3.

## Como executar
Abra `index.html` no navegador. Bootstrap e Google Fonts são carregados por CDN, então esses recursos externos precisam de internet.

## Personalizações pendentes antes de publicar
1. **RSVP:** crie um Google Forms com nome, quantidade de convidados e confirmação de presença. Em Respostas, use o ícone do Google Sheets para criar uma planilha vinculada. Copie o link público do formulário e cole em `RSVP_FORM_URL`, no início do bloco RSVP em `js/main.js`.
2. **Pix:** substitua a chave fictícia em `index.html` pela chave real. Gere um QR Code Pix estático no aplicativo do banco dos noivos e coloque a imagem na pasta `img/`, com botão ou imagem junto à chave. Não publique a chave demonstrativa atual: ela é apenas para testar a interface.
3. **Local:** o botão abre o link compartilhado do Google Maps para o Recanto Santa Rita.
4. **Revisão:** confirmar textos, traje e orientações finais aos convidados.

A contagem regressiva está configurada para 21/02/2027 às 16h (horário de Brasília).

## Google Forms + Google Sheets
O formulário é hospedado pelo Google, não pelo site. As respostas podem ser armazenadas automaticamente em uma planilha Google Sheets vinculada ao formulário. O site estático apenas direciona os convidados para a URL pública do formulário.

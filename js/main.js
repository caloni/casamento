(() => {
  // 21/02/2027 às 16h, horário de Brasília.
  const target = new Date('2027-02-21T16:00:00-03:00').getTime();
  const ids = ['days','hours','minutes','seconds'];
  const els = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
  const message = document.getElementById('countdown-message');
  function tick() {
    let d = target - Date.now();
    if (d <= 0) {
      ids.forEach(id => els[id].textContent = '0');
      message.textContent = 'Chegou o dia! Estamos esperando por você.';
      return;
    }
    const days = Math.floor(d / 86400000); d %= 86400000;
    const hours = Math.floor(d / 3600000); d %= 3600000;
    const minutes = Math.floor(d / 60000);
    const seconds = Math.floor((d % 60000) / 1000);
    els.days.textContent = days;
    els.hours.textContent = String(hours).padStart(2,'0');
    els.minutes.textContent = String(minutes).padStart(2,'0');
    els.seconds.textContent = String(seconds).padStart(2,'0');
  }
  tick(); setInterval(tick, 1000);
  document.querySelectorAll('.navbar .nav-link').forEach(link => link.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  }));

  // COLE A URL pública do Google Forms aqui quando o formulário estiver pronto.
  // Exemplo: https://docs.google.com/forms/d/e/SEU_ID/viewform
  const RSVP_FORM_URL = '';
  const rsvpLink = document.getElementById('rsvp-link');
  const rsvpNote = document.getElementById('rsvp-note');
  if (RSVP_FORM_URL) {
    rsvpLink.href = RSVP_FORM_URL;
    rsvpLink.target = '_blank';
    rsvpLink.rel = 'noopener';
    rsvpNote.textContent = 'Você será direcionado ao formulário de confirmação.';
  } else {
    rsvpLink.addEventListener('click', event => {
      event.preventDefault();
      rsvpNote.textContent = 'O formulário ainda está sendo preparado. Em breve disponibilizaremos o link!';
    });
  }

  // Cópia da chave Pix fictícia para testar a interação. Substituir antes da publicação.
  const copyPix = document.getElementById('copy-pix');
  const pixKey = document.getElementById('pix-key');
  const pixStatus = document.getElementById('pix-copy-status');
  if (copyPix && pixKey) {
    copyPix.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(pixKey.textContent.trim());
        pixStatus.textContent = 'Chave demonstrativa copiada. Atenção: ela não é válida para pagamento.';
      } catch {
        pixStatus.textContent = 'Não foi possível copiar automaticamente. Selecione e copie o texto acima.';
      }
    });
  }

})();
/* --- 1. Inicializando Animações (AOS) --- */
// Verifica se a biblioteca foi carregada para evitar erros
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
  });
}

/* --- 2. Efeito de Digitação (Typed.js) --- */
if (document.querySelector('.typed-text')) {
  const typed = new Typed('.typed-text', {
    strings: [
      'Desenvolvedor Full-Stack',
      'Engenheiro de Software',
      'Entusiasta de IA'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
}

/* --- 3. Gráfico de Skills (Círculos) --- */
const skillCircles = document.querySelectorAll('.skill-circle');
skillCircles.forEach((circle) => {
  const percent = circle.getAttribute('data-percent');
  circle.style.background = `conic-gradient(#42c9ff 0% ${percent}%, #1a1a1a ${percent}% 100%)`;
});

/* --- 4. FAQ (Sanfona) --- */
const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Fecha os outros (opcional, remova se quiser abrir vários ao mesmo tempo)
    const activeItem = document.querySelector('.faq-item.active');
    if (activeItem && activeItem !== button.parentElement) {
      activeItem.classList.remove('active');
    }
    
    // Abre/Fecha o atual
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});

/* --- 5. Modal de Contato --- */
const modal = document.getElementById('contactModal');
const openBtn = document.querySelector('.hire'); // Botão "Contrate-me"
const closeBtn = document.getElementById('closeModal');
const successPopup = document.getElementById('successPopup');
const contactForm = document.querySelector('#contactModal form');

// Só executa se os elementos existirem na página
if (openBtn && modal && closeBtn && contactForm) {
  
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';   
  });

  // Fechar clicando fora do modal
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Enviar formulário
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
    contactForm.reset();

    // Mostra popup de sucesso
    successPopup.style.display = 'flex';
    setTimeout(() => {
      successPopup.style.display = 'none';
    }, 3000);
  });
}

/* --- 6. Smooth Scroll para Links Internos --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

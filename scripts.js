// Exemplo simples de animação ao rolar para exibir elementos
document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.animate');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});
// Inicializa o EmailJS com sua Public Key
emailjs.init('xJjwzwHK6ZsnxGH82'); // <-- Substituir aqui

const form = document.getElementById('contact-form');
const sendButton = document.getElementById('send-button');
const loadingText = document.getElementById('loading');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Mostrar "Enviando..."
    sendButton.style.display = 'none';
    loadingText.style.display = 'inline';

    const serviceID = 'service_sbuqncw'; // <-- Substituir aqui
    const templateID = 'template_fjdozon'; // <-- Substituir aqui

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        form.reset();

        // Voltar para o botão normal
        sendButton.style.display = 'inline';
        loadingText.style.display = 'none';
      }, (error) => {
        console.error('Erro:', error);
        alert('Ocorreu um erro. Tente novamente.');

        // Voltar para o botão normal
        sendButton.style.display = 'inline';
        loadingText.style.display = 'none';
      });
});
// Exemplo de animação ao rolar para exibir elementos
document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.animate');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});



const urlDestino = "https://www.google.com";
let segundos = 30;
const display = document.getElementById('countdown');

// Redirecionamento via botão
const executarAcao = () => {
    window.location.href = urlDestino;
};

// Redirecionamento automático
const cronometro = setInterval(() => {
    segundos--;
    if (display) display.textContent = segundos;

    if (segundos <= 0) {
        clearInterval(cronometro);
        executarAcao();
    }
}, 1000);
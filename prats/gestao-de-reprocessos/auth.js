const USUARIOS_PERMITIDOS = {
	"moises.morais": "71239856",
	"jhonn.santos": "1910",
	"geazi.mathias": "abc123",
	"mateus.alves": "@prats5000",
	"carlos.domingos": "@prats5000",
	"otavio.godoy": "@prats5000"
};

const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        const erroMsg = document.getElementById('erro');

        if (USUARIOS_PERMITIDOS[user] && USUARIOS_PERMITIDOS[user] === pass) {
            // Salva o login na sessão (apaga ao fechar o navegador)
            sessionStorage.setItem('usuarioLogado', user);
            sessionStorage.setItem('autenticado', 'true');
            window.location.href = 'rep-nfc.html';
        } else {
            erroMsg.style.display = 'block';
        }
    });
}

// Função de Proteção: Adicione esta chamada no topo do seu arquivo rep-nfc.html
function verificarAutenticacao() {
    if (sessionStorage.getItem('autenticado') !== 'true') {
        window.location.href = 'index.html';
    }

}




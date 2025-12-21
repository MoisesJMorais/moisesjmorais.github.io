//Impedir seleção de conteúdo na página
document.onselectstart = function() { return false; };
//Impedir download de imagens com clique e arraste
document.ondragstart = function() { return false; };
//Travar aba do navegador caso alguém acesse opções de desenvolvedor
setInterval(function() {
    (function(i) {
        (function() {
            (function() {
                debugger;
            }());
        }());
    }(0));
}, 1000);
//Forçar o site a sair de iframes esxternos
if (window.top !== window.self) {
    window.top.location = window.self.location; // Força o site a sair do iframe
}
//Bloqueio de teclas de atalho (F12, Ctrl+Shift+I, Ctrl+U, etc.)
document.addEventListener('keydown', function(event) {
    // Bloqueia tecla F12
    if (event.key === "F12") {
        event.preventDefault();
        return false;
    }
    // Bloqueia Ctrl+Shift+I (Inspecionar), Ctrl+Shift+J (Console), Ctrl+U (Ver código-fonte)
    if (event.ctrlKey && (event.shiftKey && (event.key === 'I' || event.key === 'J') || event.key === 'u')) {
        event.preventDefault();
        return false;
    }

    // Nota sobre a tecla FN: O navegador geralmente não intercepta a tecla FN isoladamente, 
    // pois ela é tratada em nível de hardware/sistema operacional.
});

// 3. Bloqueio do clique direito (Menu de Contexto)
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
}, false);

// 6. Tentativa de mitigar Print Screen (Limpando a área de transferência)
// Nota: Não é possível impedir o hardware de capturar a tela, mas podemos monitorar o foco.
window.addEventListener('keyup', function(e) {
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText(''); // Tenta limpar o que foi copiado
        alert('Capturas de tela são restritas nesta página.');
    }
});

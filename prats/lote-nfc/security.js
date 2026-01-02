// DESENVOLVIDO POR MOISÉS J. MORAIS LKMA

// Bloquear atalhos de inspeção no teclado
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (
    key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(key)) ||
    (e.ctrlKey && ["U","S","H","A","F","E"].includes(key))
  ) {
    e.preventDefault();
    e.stopPropagation();
  }
});

// Bloquear clique direito do mouse
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

// Monitorar abertura do DevTools pelo redimensionamento da janela
setInterval(() => {
  const devtoolsAberto =
    window.outerWidth - window.innerWidth > 160 ||
    window.outerHeight - window.innerHeight > 160;

  if (devtoolsAberto) {
    document.body.innerHTML = `
      <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        font-family:sans-serif;
        text-align:center;
        background:#fff;
      ">
        <h1>🚫 Acesso bloqueado</h1>
      </div>
    `;
  }
}, 1000);

// Desabilitar seleção de texto e copiar
const style = document.createElement("style");
style.innerHTML = `
  body {
    user-select: none !important;
    -webkit-user-select: none !important;
    -ms-user-select: none !important;
  }
`;
document.head.appendChild(style);
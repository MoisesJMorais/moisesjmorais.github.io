// DESENVOLVIDO POR MOISÉS J. MORAIS LIMA

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

// Impede o zoom via roda do mouse (Ctrl + Scroll)
		document.addEventListener('wheel', function (e) {
		  if (e.ctrlKey) {
		    e.preventDefault();
		  }
		}, { passive: false });

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

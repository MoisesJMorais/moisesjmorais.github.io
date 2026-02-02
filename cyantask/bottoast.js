// --- DESENVOLVIDO POR MOISÉS J. MORAIS LIMA ---
function notificarConclusao() {
  const frases = [
    "Tarefa entregue com sucesso. Nível: Jedi da produtividade.",
    "Check concluído. Você acaba de subir 2 níveis no jogo da vida.",
    "Missão finalizada. A galáxia do foco agradece.",
    "Tarefa descarregada no destino certo. Sem avarias.",
    "Produtividade 1 × Caos 0. Placar atualizado.",
    "Você concluiu uma task. Isso te dá +10 de autoestima.",
    "Feito! Se eficiência fosse moeda, você tava rico agora.",
    "Ok! Operação finalizada com padrão ISO 9001 do coração.",
    "Conclusão confirmada. Universo orgulhoso.",
    "Task concluída. Dopamina liberada sem moderação."
  ];
  const msg = frases[Math.floor(Math.random() * frases.length)];

  const toast = document.createElement("div");
  toast.innerHTML = `
    <div style="
      display:flex;
      align-items:center;
      gap:14px;
      background:#1e1e1e;
      border:1px solid #00e5ff;
      color:#e0e0e0;
      padding:14px 18px;
      border-radius:16px;
      box-shadow:0 6px 20px rgba(0,0,0,0.4);
      width:90%;
      max-width:360px;
      font-size:1rem;
      position:fixed;
      top:16px;
      left:50%;
      transform:translateX(-50%);
      animation:botSlide 0.4s ease-out;
      z-index:9999;
    ">
      <img src="favicon.ico"
      style="width:56px;height:56px;">
      <span>${msg}</span>
    </div>
    <style>
      @keyframes botSlide {
        from {opacity:0; transform:translate(-50%, -10px);}
        to {opacity:1; transform:translate(-50%, 0);}
      }
    </style>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}

// Intercepta a conclusão sem impedir a movimentação original
const toggleOriginal = toggleTask;
toggleTask = function(id) {
  const task = tasks.find(t => t.id === id);
  const estavaConcluida = task?.completed;

  toggleOriginal(id); // executa normalmente (salva e move pra concluídas)

  const agoraConcluida = tasks.find(t => t.id === id)?.completed;
  if (!estavaConcluida && agoraConcluida) {
    setTimeout(notificarConclusao, 200);
  }
};

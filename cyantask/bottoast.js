// --- DESENVOLVIDO POR MOISÉS J. MORAIS LIMA ---
function notificarConclusao() {
  const frases = [
    "Tarefa concluída com sucesso. Próximo nível: Jedi da produtividade.",
    "Tarefa finalizada! Agora respira e toma um suco (Só zoeira, ok?)!",
    "Moisés Morais ataca novamente!",
    "Concluído com a energia de quem sabe o que faz.",
    "Sextou? Ainda não, mas essa tarefa já era!",
    "Você está mais rápido que o carregamento da fábrica!",
    "Boa! O dia está rendendo na mão de quem entende.",
    "Ficou perfeito. Padrão Moisés de qualidade!",
    "Pode riscar essa da lista. Você é imparável!",
    "Trabalho concluído. O descanso vai ser merecido!",
    "Missão dada é missão cumprida. Boa, Moisés!",
    "Check feito! O sucesso é a soma de pequenos esforços diários.",
    "Moisés, você está voando hoje! Próximo passo?",
    "Excelente! Sua dedicação é o que faz a diferença aqui.",
    "Nada resiste ao trabalho duro. Continue assim!",
    "Vencendo um desafio de cada vez. Você é fera!",
    "Organização é tudo, e você deu aula agora.",
    "Menos uma tarefa, mais um motivo para se orgulhar.",
    "O esforço de hoje é o resultado de amanhã. Pra cima!",
    "Você é o motor que faz essa engrenagem girar.",
    "Disciplina é fazer o que precisa ser feito. E você fez!",
    "Tarefa concluída! Você é o gelo que falta nesse suco.",
    "Frio na câmara, sangue quente no trabalho. Mandou bem!",
    "Mais uma para a conta. A administração depende de você!",
    "Missão cumprida Moisés! Nem o zero grau te segura hoje.",
    "Foco total, Moisés! A qualidade está em cada detalhe.",
    "Pressão total e entrega impecável. Boa, Moisés!",
    "Mais uma tarefa congelada com sucesso.",
    "Trabalho de gigante em clima de montanha. Parabéns Moisés!",
    "Sua agilidade mantém tudo no padrão ouro de qualidade.",
    "A temperatura cai, mas sua produtividade só sobe!"
    
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

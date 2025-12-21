    const input = document.getElementById('searchInput');
    const items = document.querySelectorAll('.favorite-icon');

    input.addEventListener('input', () => {
      const filtro = input.value.toLowerCase();

      items.forEach(item => {
        const texto = item.querySelector('span').textContent.toLowerCase();
        item.style.display = texto.includes(filtro) ? 'block' : 'none';
      });
    });
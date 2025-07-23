document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remover active de todos os botões
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Ocultar todos os formulários
    document.querySelectorAll('.form-section').forEach(section => {
      section.classList.remove('active');
      section.classList.add('hidden');
    });

    // Mostrar o formulário selecionado
    const targetId = btn.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    targetSection.classList.add('active');
    targetSection.classList.remove('hidden');
  });
});

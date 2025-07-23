function showForm(id) {
  const sections = document.querySelectorAll('.form-section');
  sections.forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

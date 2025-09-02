// Guarda el valor del input en localStorage
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('inputText');
  const btn = document.getElementById('buttonText');
  if (!input || !btn) return;

  btn.addEventListener('click', () => {
    const value = String(input.value ?? '');
    // clave única para compartir entre páginas
    localStorage.setItem('formData', value);
  });
});
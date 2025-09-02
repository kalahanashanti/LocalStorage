// Lee el valor del localStorage y lo muestra en el span#data
document.addEventListener('DOMContentLoaded', () => {
  const span = document.getElementById('data');
  if (!span) return;

  const value = localStorage.getItem('formData');
  span.textContent = value ?? '(sin datos)';
});
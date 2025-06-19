// Script to create a simple interactive toggle button that switches between showing and hiding content with corresponding button text updates

const button = document.getElementById('toggleBtn');
const text = document.getElementById('toggleText');

button.addEventListener('click', function() {
  if (text.classList.contains('hidden')) {
    text.classList.remove('hidden');
    button.textContent = 'Masquer';
  } else {
    text.classList.add('hidden');
    button.textContent = 'Afficher';
  }
});

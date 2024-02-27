const keys = document.querySelectorAll('.key');
const modeToggle = document.getElementById('mode-toggle');
let isDarkMode = false;

keys.forEach(key => {
  key.addEventListener('click', () => {
    simulateKeyPress(key.dataset.key);
    toggleBacklight(key);
  });
});

modeToggle.addEventListener('click', toggleMode);

function simulateKeyPress(key) {
  // Here you can add functionality to simulate key press events.
  // For demonstration purposes, let's just log the pressed key.
  console.log('Key Pressed:', key);
}

function toggleBacklight(element) {
  element.classList.toggle('backlit');
}

function toggleMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  keys.forEach(key => {
    key.classList.toggle('dark-mode', isDarkMode);
  });
}
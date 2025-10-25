 const toggle = document.getElementById("darkModeToggle");
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const icon = toggle.querySelector("i");
      icon.classList.toggle("fa-moon");
      icon.classList.toggle("fa-sun");
    });


   // === Responsive Hamburger Menu ===
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// === Dark Mode Toggle ===
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save user preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem('theme', 'light');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// === Load Theme on Page Load ===
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

const menuItems = document.querySelectorAll('nav ul li');
const panels = document.querySelectorAll('.slide-panel');
const closeButtons = document.querySelectorAll('.close-btn');

// Function to open a panel
function openPanel(panelId) {
  panels.forEach(panel => {
    if (panel.id === panelId) {
      panel.classList.add('open');
    } else {
      panel.classList.remove('open');
    }
  });

  menuItems.forEach(item => {
    if (item.dataset.panel === panelId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Event listeners for menu items
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    openPanel(item.dataset.panel);
  });
});

// Event listeners for close buttons
closeButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.parentElement.classList.remove('open');
    const anyOpen = Array.from(panels).some(p => p.classList.contains('open'));
    if (!anyOpen) {
      menuItems.forEach(i => i.classList.remove('active'));
    }
  });
});

// Contact form submit simulation
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formResponse.style.display = 'block';
  contactForm.reset();
  setTimeout(() => {
    formResponse.style.display = 'none';
  }, 5000);
});

// =============================================
// IVYAMBITION — JAVASCRIPT
// =============================================

// Tab switching
const tabBtns = document.querySelectorAll('.vtab-btn');
const tabContents = document.querySelectorAll('.vtab-content');

function switchTab(tabId) {
  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  tabContents.forEach(content => {
    content.classList.toggle('active', content.id === `tab-${tabId}`);
  });
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Nav scroll behavior - adds solid bg on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.12)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
  }
});

// Form submission
const bookForm = document.getElementById('bookForm');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const wrap = bookForm.closest('.book-form');
  wrap.innerHTML = `
    <div class="form-success">
      <div class="success-icon">✓</div>
      <h4>You're on the list.</h4>
      <p>Thanks for reaching out. A member of our team will contact you within 24 hours to schedule your complimentary strategy call.</p>
    </div>
  `;
});

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Footer tab links
window.switchTab = switchTab;

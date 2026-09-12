const navigation = document.querySelector('.navigation');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
const mobileViewport = window.matchMedia('(max-width: 767px)');

function closeMenu({ restoreFocus = false } = {}) {
  menuButton.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('is-open');
  menuButton.querySelector('span').textContent = '+';
  if (restoreFocus) menuButton.focus();
}

function syncNavigation() {
  const focusWillBeHidden = mobileViewport.matches && navLinks.contains(document.activeElement);
  closeMenu();
  menuButton.hidden = !mobileViewport.matches;
  if (focusWillBeHidden) menuButton.focus();
}

navigation.classList.add('is-enhanced');
syncNavigation();
mobileViewport.addEventListener('change', syncNavigation);

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  navLinks.classList.toggle('is-open', expanded);
  menuButton.querySelector('span').textContent = expanded ? '−' : '+';
});

navigation.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu({ restoreFocus: true });
  }
});

navLinks.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || !mobileViewport.matches) return;
  closeMenu();
  const section = document.querySelector(link.hash);
  if (section) {
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
    section.addEventListener('blur', () => section.removeAttribute('tabindex'), { once: true });
  }
});

navigation.addEventListener('focusout', (event) => {
  if (!navigation.contains(event.relatedTarget)) closeMenu();
});

document.addEventListener('click', (event) => {
  if (!navigation.contains(event.target)) closeMenu();
});

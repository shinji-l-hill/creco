document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById('js-hamburger-btn');

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }

  new ImageScrollHandler();
});
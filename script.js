document.addEventListener('DOMContentLoaded', function() {
  // Navigation between pages
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const pageId = this.getAttribute('data-page');

      document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');

      document.querySelectorAll('.nav-link').forEach(navLink => navLink.classList.remove('active'));
      this.classList.add('active');
    });
  });
  // Language selector
  document.querySelectorAll('.language-dropdown a').forEach(langLink => {
    langLink.addEventListener('click', function(e) {
      e.preventDefault();
      const languageName = this.textContent.split(' ')[0];
      document.querySelector('.current-language').textContent = languageName;
      alert(`Language changed to ${languageName}. (Demo only)`);
    });
  });
  // Order form submission
  document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your order! We will contact you soon.');
    this.reset();
  });
  // Default active page
  document.querySelector('.nav-link[data-page="login"]').classList.add('active');
});

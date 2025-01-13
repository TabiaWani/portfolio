document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");  
    const sections = document.querySelectorAll('section[id]');  
    const navLinkItems = document.querySelectorAll('header .nav-links a');  

   
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

   
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.classList.contains(current)) {
                link.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // 2. Typing Effect
    const roles = [
        "Full Stack Web Apps",
        "AI & Machine Learning Models",
        "3D Digital Twins",
        "Automated Pipelines"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    const dynamicText = document.querySelector('.dynamic-text');
    
    function typeEffect() {
        if(!dynamicText) return;
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            dynamicText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            dynamicText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingDelay = 2000; // Pause at the end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500; // Pause before new word
        }
        
        setTimeout(typeEffect, typingDelay);
    }
    setTimeout(typeEffect, 1000);

    // 3. Navbar background on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(7, 9, 14, 0.95)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(7, 9, 14, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // 4. Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

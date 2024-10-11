document.addEventListener('DOMContentLoaded', () => {
    // Handle hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    // Carousel functionality
    const slides = document.querySelectorAll('.slides img');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    };

    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);

    // Toggle tabs functionality
    const tabs = document.querySelector('.toggle-tabs .buttonWrapper');
    const tabButtons = document.querySelectorAll('.toggle-tabs .tab-button');
    const contents = document.querySelectorAll('.toggle-tabs .content');

    tabs.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            tabButtons.forEach(button => button.classList.remove('active'));
            e.target.classList.add('active');

            contents.forEach(content => content.classList.remove('active'));
            document.getElementById(id).classList.add('active');
        }
    });

    // Scroll-to-top functionality
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const introSection = document.querySelector('.intro-text');
    const heroSection = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        if (window.scrollY > introSection.offsetHeight) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }

        // WhatsApp button visibility
        if (window.scrollY > 100) {
            whatsappButton.classList.add('show');
        } else {
            whatsappButton.classList.remove('show');
        }
    });

    // Smooth scroll to hero section
    scrollToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        heroSection.scrollIntoView({ behavior: 'smooth' });
    });

    // WhatsApp button
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/447481086702?text=Hello%20JDL%20decor,%20Could%20I%20get%20a%20free%20quote%20please?';
    whatsappButton.target = '_blank';
    whatsappButton.classList.add('whatsapp-button');
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappButton);
});

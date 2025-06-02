document.addEventListener('DOMContentLoaded', function () {
    // 🌗 Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeIcon.classList.toggle('fa-moon', !isDark);
        themeIcon.classList.toggle('fa-sun', isDark);
    });

    // 📱 Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');

        const bars = menuToggle.querySelectorAll('.bar');
        if (navLinks.classList.contains('active')) {
            bars[0].style.transform = 'translateY(9px) rotate(45deg)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'translateY(-9px) rotate(-45deg)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // 📲 Close menu on link click
    const mobileLinks = document.querySelectorAll('.nav-links .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const bars = menuToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    });

    // 🚫 EmailJS logic temporarily removed to avoid errors
});
document.addEventListener('DOMContentLoaded', function () {
    // ... your existing code here ...

    // 📍 Typing Animation START (paste this at the end)
    const phrases = ["Web Developer", "Software Developer", "CSIT Student"];
    const typedText = document.getElementById("typed-text");
    const cursor = document.querySelector(".cursor");
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;

    function loop() {
        isEnd = false;
        typedText.innerHTML = currentPhrase.join("");

        if (i < phrases.length) {
            if (!isDeleting && j <= phrases[i].length) {
                currentPhrase.push(phrases[i][j]);
                j++;
                typedText.innerHTML = currentPhrase.join("");
            }

            if (isDeleting && j <= phrases[i].length) {
                currentPhrase.pop();
                j--;
                typedText.innerHTML = currentPhrase.join("");
            }

            if (j == phrases[i].length) {
                isEnd = true;
                isDeleting = true;
            }

            if (isDeleting && j === 0) {
                currentPhrase = [];
                isDeleting = false;
                i++;
                if (i === phrases.length) {
                    i = 0;
                }
            }
        }

        const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
        setTimeout(loop, speed);
    }

    loop();
    // 📍 Typing Animation END
});

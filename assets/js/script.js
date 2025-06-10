document.addEventListener("DOMContentLoaded", function () {
  // Load saved theme from local storage
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    document.getElementById("themeStylesheet").setAttribute("href", savedTheme);

    // Set active class on the selected theme button
    const themeButtons = document.querySelectorAll("[data-theme]");
    themeButtons.forEach((btn) => {
      if (btn.getAttribute("data-theme") === savedTheme) {
        btn.classList.add("active-theme");
      }
    });
  }
});

document.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-theme")) {
    const themeFile = event.target.getAttribute("data-theme");

    // Remove active class from all buttons and set it for the selected one
    const themeButtons = document.querySelectorAll("[data-theme]");
    themeButtons.forEach((btn) => btn.classList.remove("active-theme"));
    event.target.classList.add("active-theme");

    // Change theme
    document.getElementById("themeStylesheet").setAttribute("href", themeFile);

    // Save the selected theme to local storage
    localStorage.setItem("selectedTheme", themeFile);

    // Animation on scroll functionality
        document.addEventListener('DOMContentLoaded', function() {
            const animateOnScroll = () => {
                const cards = document.querySelectorAll('.skill-card, .achievement-card, .certification-card');
                
                cards.forEach((card, index) => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (cardPosition < screenPosition) {
                        // Add staggered delay based on index
                        setTimeout(() => {
                            card.classList.add('show');
                        }, 150 * (index % 4));
                    }
                });
            };
            
            // Run on initial load
            animateOnScroll();
            
            // Run on scroll
            window.addEventListener('scroll', animateOnScroll);
        });
      // Scroll animation for sections
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.skill-card, .achievement-card, .certification-card');
        const windowHeight = window.innerHeight;
        
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const animationPoint = windowHeight - 100;
            
            if (cardPosition < animationPoint) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 150 * (index % 3));
            }
        });
    };
    
    // Initialize cards as hidden
    document.querySelectorAll('.skill-card, .achievement-card, .certification-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    // Run on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});

    

    
  }
});

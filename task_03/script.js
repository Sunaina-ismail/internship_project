document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navLinks = document.querySelector(".nav-links")
  
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active")
      })
    }
  
    // Add active class to nav links for mobile
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active")
      })
    })
  
    // Testimonial slider controls
    const prevBtn = document.querySelector(".testimonial-controls button:first-child")
    const nextBtn = document.querySelector(".testimonial-controls button:last-child")
    const testimonialCards = document.querySelector(".testimonial-cards")
  
    if (prevBtn && nextBtn && testimonialCards) {
      let scrollAmount = 0
      const cardWidth = 330 // Card width + gap
  
      prevBtn.addEventListener("click", () => {
        scrollAmount = Math.max(scrollAmount - cardWidth, 0)
        testimonialCards.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        })
      })
  
      nextBtn.addEventListener("click", () => {
        scrollAmount = Math.min(scrollAmount + cardWidth, testimonialCards.scrollWidth - testimonialCards.clientWidth)
        testimonialCards.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        })
      })
    }
  })
  
  
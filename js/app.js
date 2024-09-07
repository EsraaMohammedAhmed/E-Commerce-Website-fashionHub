
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// Animations
ScrollReveal().reveal(".top_nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal(".nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 100,
});

ScrollReveal().reveal(".header", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 200,
});
ScrollReveal().reveal(".section", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(".footer", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});

// mobile nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});

const AddToCart = document.querySelectorAll(".add_to_cart");

AddToCart.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const title = button.getAttribute("data-title");
    const image = button.getAttribute("data-image");
    const price = button.getAttribute("data-price");

    const cartItem = { id, title, image, price };
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});


///////sliders //////////////
$(document).ready(function() {
  let currentIndex = 0;
  const slides = $('.slide');
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.removeClass('active'); // Hide all slides
      slides.eq(index).addClass('active'); // Show the current slide
      const offset = index * -100; // Calculate the offset
      $('.slider').css('transform', 'translateX(' + offset + '%)'); // Apply the offset
  }

  $('.next').on('click', function() {
      currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide
      showSlide(currentIndex); // Show the slide
  });

  $('.prev').on('click', function() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move to the previous slide
      showSlide(currentIndex); // Show the slide
  });
});




$(document).ready(function() {
  let currentIndex = 0;
  const slides = $('.slide');
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.removeClass('active'); // Hide all slides
      slides.eq(index).addClass('active'); // Show the current slide
      const offset = index * -100; // Calculate the offset
      $('.slider').css('transform', 'translateX(' + offset + '%)'); // Apply the offset
  }

  $('.next').on('click', function() {
      currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide
      showSlide(currentIndex); // Show the slide
  });

  $('.prev').on('click', function() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move to the previous slide
      showSlide(currentIndex); // Show the slide
  });

  // Optional: Auto transition every few seconds
  setInterval(function() {
      $('.next').click(); // Simulate a click on the next button
  }, 3000); // Change slide every 5 seconds (adjust as needed)
});

document.addEventListener("DOMContentLoaded", function() {
  // Wait for a few seconds (e.g., 3 seconds)
  setTimeout(function() {
      // Hide the splash screen
      document.getElementById('splash-screen').style.display = 'none';
      // Show the main content
      document.getElementById('main-content').style.display = 'block';
  }, 3000); // Change this duration as needed (3000 milliseconds = 3 seconds)
});








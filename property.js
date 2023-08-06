// Get all the slide elements
const slides = document.querySelectorAll(".slide");

// Function to show the next slide
function showNextSlide() {
  const currentSlide = document.querySelector(".slide.show");
  const nextSlide = currentSlide.nextElementSibling || slides[0];
  currentSlide.classList.remove("show");
  nextSlide.classList.add("show");
}

// Set an interval to change the slide every 3 seconds (adjust as needed)
setInterval(showNextSlide, 3000);

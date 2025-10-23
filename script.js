
function toggleMenu() {
  const menu = document.querySelector('.center-links');
  console.log(menu);
  menu.classList.toggle('show');
}

// Wait for page to load before getting elements
window.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slide = document.getElementById("slidesImg");

  fetch('images.json')
    .then(response => response.json())
    .then(data => {
      const images = data.images;

      function showSlides() {
        slide.style.opacity = 0;

        setTimeout(() => {
          slide.src = images[slideIndex];
          slide.style.opacity = 1;
        }, 500);

        slideIndex = (slideIndex + 1) % images.length;
        setTimeout(showSlides, 4000);
      }

      showSlides();
    })
    .catch(err => console.error("Error Loading image:", err));
});
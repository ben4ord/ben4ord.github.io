
// toggle links off on on for mobile or small screened devices
function toggleMenu() {
  const menu = document.querySelector('.center-links');
  console.log(menu);
  menu.classList.toggle('show');
}

// Wait for page to load before getting elements
// for slide show on homepage 
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

// Wait for page to load before getting elements
// for slide Reservation slide show
let slide ;
let resSlideIndex = 0;
let images;

window.addEventListener("DOMContentLoaded", () => {

  slide = document.getElementById("resSlidesImg");
  // Next/previous controls
  fetch('reservationImages.json')
    .then(response => response.json())
    .then(data => {
      images = data.images;
      console.log(images.length);
    })
    .catch(err => console.error("Error Loading image:", err));
});

function plusSlides(n) {
  showResSlides(resSlideIndex += n);
}


function showResSlides(n) {

  if (n > images.length){
    resSlideIndex = 1;
    console.log("Meow");

  }
  if (n < 1){
    resSlideIndex = images.length;
    console.log("Meow");

  }
  console.log(resSlideIndex);
  slide.src = images[resSlideIndex-1];

}


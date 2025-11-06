
// toggle links off on on for mobile or small screened devices
function toggleMenu() {
  const menu = document.querySelector('.center-links');
  
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
      
    })
    .catch(err => console.error("Error Loading image:", err));
});

function plusSlides(n) {
  showResSlides(resSlideIndex += n);
}


function showResSlides(n) {

  if (n > images.length){
    resSlideIndex = 1;
   

  }
  if (n < 1){
    resSlideIndex = images.length;
    

  }
  console.log(resSlideIndex);
  slide.src = images[resSlideIndex-1];

}


//History slideshow content 
window.addEventListener("DOMContentLoaded", () => {
  loadHistory();
});
// if (window.location.pathname.includes("about.html")) {
//   loadHistory();
// }
let historyOne;
let historyTwo;
let historyThree;
let historyIndex = 0;
let historyData;
let historyLength;

let contentOne;
let yearOne;
let imgOne;
let blurbOne;

let contentTwo; 
let yearTwo; 
let imgTwo;
let blurbTwo;

let contentThree;
let yearThree;
let imgThree; 
let blurbThree;

function loadHistory() {

  contentOne = document.getElementsByClassName("year-obj-1")[0];
  yearOne = contentOne.querySelector(".year");
  imgOne = contentOne.querySelector(".historyImg");
  blurbOne = contentOne.querySelector(".historyBlurb");

  contentTwo = document.getElementsByClassName("year-obj-2")[0];
  yearTwo = contentTwo.querySelector(".year");
  imgTwo = contentTwo.querySelector(".historyImg");
  blurbTwo = contentTwo.querySelector(".historyBlurb");

  contentThree = document.getElementsByClassName("year-obj-3")[0];
  yearThree = contentThree.querySelector(".year");
  imgThree = contentThree.querySelector(".historyImg");
  blurbThree = contentThree.querySelector(".historyBlurb");

  fetch("history.json")
    .then(response => response.json())
    .then(data => {
      historyData = data.history;
      historyOne = data.history[0];
      historyTwo = data.history[1];
      historyThree = data.history[2];
      historyLength = data.history.length;

      yearOne.textContent = historyOne.year;
      imgOne.src = historyOne.image;
      blurbOne.textContent = historyOne.blurb;

      yearTwo.textContent = historyTwo.year;
      imgTwo.src = historyTwo.image;
      blurbTwo.textContent = historyTwo.blurb;

      yearThree.textContent = historyThree.year;
      imgThree.src = historyThree.image;
      blurbThree.textContent = historyThree.blurb;
    });
}

function plusHisSlides(n) {
  historyIndex += n;
  if(historyIndex < 0){historyIndex = 0;}
  if(historyIndex > historyLength-3){historyIndex = historyLength -3;}
  updateHisSlides(historyIndex);
}

function updateHisSlides(n) {
  // console.log(historyLength);
  // console.log(n);

 // guard clause: wrap around if we reach the end
  if (n < 0){ n = 0;}
  if (n + 2 >= historyLength) {n = historyLength - 3;}

  // only continue if we have enough entries
  if (n < historyLength - 2) {
    // get the current 3 entries dynamically
    const historyOne = historyData[n];
    const historyTwo = historyData[n + 1];
    const historyThree = historyData[n + 2];

    // update DOM
    yearOne.textContent = historyOne.year;
    imgOne.src = historyOne.image;
    blurbOne.textContent = historyOne.blurb;

    yearTwo.textContent = historyTwo.year;
    imgTwo.src = historyTwo.image;
    blurbTwo.textContent = historyTwo.blurb;

    yearThree.textContent = historyThree.year;
    imgThree.src = historyThree.image;
    blurbThree.textContent = historyThree.blurb;
}
  
}
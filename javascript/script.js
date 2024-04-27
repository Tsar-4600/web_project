
console.log('Rabotaet');

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var dropdowns = document.querySelectorAll('.dropdown-content');
var arrow = document.getElementsByClassName("arrow");

function myFunction(index) {
  dropdowns[index].classList.toggle("show");
  if( index < 5){
    arrow[index].classList.toggle("arrow-rotation");
   
  }
  else{
    arrow[index].classList.toggle("arrow-2nd-rotation");

  }

}

//Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var arrow = document.getElementsByClassName("arrow");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var downArrow = arrow[i];
        if (openDropdown.classList.contains('show')){
          openDropdown.classList.remove('show');
          if(downArrow.classList.contains('arrow-rotation')){
            
          }
          else{
            downArrow.classList.remove('arrow-2nd-rotation');
          }
          

        
        }
    }
  }
};
/*fifth block slider*/
var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  spaceBetween: 20,
  autoplayDelay: 5000,
  autoplayDisableOnInteraction: false,
  slidesPerView: 6,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});




/*seventh-slider code */


var swiperReview = new Swiper(".mySwiperReview", {
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
/rescaling swiper/
 

/*dispaly popup registered form on button click*/ 
function openForm(index) {
  switch(index){
    case 1:
        document.getElementById("trialDemo-FormShow").style.border = "10px solid #24305E";
        document.getElementById("trialDemo-FormShow").style.backgroundColor = "#374785";
        document.getElementById("succes_window").style.border = "10px solid #24305E";
        document.getElementById("succes_window").style.backgroundColor = "#24305E";
        document.getElementById("send_button").style.backgroundColor = "#24305E";
        document.getElementById("close_button").style.backgroundColor = "#24305E";
        document.getElementById("ok_button").style.backgroundColor = "#24305E";
        document.getElementById("trialDemo-FormShow").style.visibility = "visible ";
      break;
    case 2:
      document.getElementById("trialDemo-FormShow").style.border = "10px solid #3c6264";
      document.getElementById("trialDemo-FormShow").style.backgroundColor = "#499f9f ";
      document.getElementById("succes_window").style.border = "10px solid #3c6264";
      document.getElementById("succes_window").style.backgroundColor = "#499f9f ";
      document.getElementById("close_button").style.backgroundColor = "#7bc5c9";
      document.getElementById("send_button").style.backgroundColor = "#7bc5c9";
      document.getElementById("close_button").style.backgroundColor = "#7bc5c9";
      document.getElementById("ok_button").style.backgroundColor = "#7bc5c9";
      document.getElementById("trialDemo-FormShow").style.visibility = "visible ";
      break;
    case 3:
      document.getElementById("trialDemo-FormShow").style.border = "10px solid #9763b0";
      document.getElementById("trialDemo-FormShow").style.backgroundColor = "#721687";
      document.getElementById("succes_window").style.border = "10px solid #9763b0";
      document.getElementById("succes_window").style.backgroundColor = "#721687";
      document.getElementById("close_button").style.backgroundColor = "#550465";
      document.getElementById("send_button").style.backgroundColor = "#550465";
      document.getElementById("ok_button").style.backgroundColor = "#550465";
      document.getElementById("trialDemo-FormShow").style.visibility = "visible ";
  }
  
}

function closeForm() {
  document.getElementById("succes_window").style.visibility = "hidden";
  document.getElementById("trialDemo-FormShow").style.visibility = "hidden";
}
function order_made_successful(){

  document.getElementById("trialDemo-FormShow").style.visibility = "hidden";
  document.getElementById("succes_window").style.visibility = "visible";


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var dropdowns = document.querySelectorAll('.dropdown-content');
var arrow = document.getElementsByClassName("arrow");

function myFunction(index) {
  dropdowns[index].classList.toggle("show");
  if( index < 5){
    arrow[index].classList.toggle("arrow-rotation");
   
  }
  else{
    arrow[index].classList.toggle("arrow-2nd-rotation");

  }

}

//Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var arrow = document.getElementsByClassName("arrow");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var downArrow = arrow[i];
        if (openDropdown.classList.contains('show')){
          openDropdown.classList.remove('show');
          if(downArrow.classList.contains('arrow-rotation')){
            
          }
          else{
            downArrow.classList.remove('arrow-2nd-rotation');
          }
          

        
        }
    }
  }
};
/*fifth block slider*/
var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  spaceBetween: 20,
  autoplayDelay: 5000,
  autoplayDisableOnInteraction: false,
  slidesPerView: 6,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});




/*seventh-slider code */


var swiperReview = new Swiper(".mySwiperReview", {
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
/rescaling swiper/
 

/*dispaly popup registered form on button click*/ 
function openForm(index) {
  switch(index){
    case 1:
        document.getElementById("trialDemo-FormShow").style.border = "10px solid #24305E";
        document.getElementById("trialDemo-FormShow").style.backgroundColor = "#374785";
        document.getElementById("succes_window").style.border = "10px solid #24305E";
        document.getElementById("succes_window").style.backgroundColor = "#24305E";
        document.getElementById("send_button").style.backgroundColor = "#24305E";
        document.getElementById("close_button").style.backgroundColor = "#24305E";
        document.getElementById("ok_button").style.backgroundColor = "#24305E";
        document.getElementById("trialDemo-FormShow").style.visibility = "visible ";
      break;
    case 2:
      document.getElementById("trialDemo-FormShow").style.border = "10px solid #3c6264";
      document.getElementById("trialDemo-FormShow").style.backgroundColor = "#499f9f ";
      document.getElementById("succes_window").style.border = "10px solid #3c6264";
      document.getElementById("succes_window").style.backgroundColor = "#499f9f ";
      document.getElementById("close_button").style.backgroundColor = "#7bc5c9";
      document.getElementById("send_button").style.backgroundColor = "#7bc5c9";
      document.getElementById("close_button").style.backgroundColor = "#7bc5c9";
      document.getElementById("ok_button").style.backgroundColor = "#7bc5c9";
      document.getElementById("trialDemo-FormShow").style.visibility = "visible ";
      break;
    case 3:
      document.getElementById("trialDemo-FormShow").style.border = "10px solid #9763b0";
      document.getElementById("trialDemo-FormShow").style.backgroundColor = "#721687";
      document.getElementById("succes_window").style.border = "10px solid #9763b0";
      document.getElementById("succes_window").style.backgroundColor = "#721687";
      document.getElementById("close_button").style.backgroundColor = "#550465";
      document.getElementById("send_button").style.backgroundColor = "#550465";
      document.getElementById("ok_button").style.backgroundColor = "#550465";
      document.getElementById("trialDemo-FormShow").style.visibility = "visible ";
  }
  
}

function closeForm() {
  document.getElementById("succes_window").style.visibility = "hidden";
  document.getElementById("trialDemo-FormShow").style.visibility = "hidden";
}
function order_made_successful(){

  document.getElementById("trialDemo-FormShow").style.visibility = "hidden";
  document.getElementById("succes_window").style.visibility = "visible";
 
}
}
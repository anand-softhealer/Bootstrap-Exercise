
$(function(){
  $('.bxslider1').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});

$(function(){
    $('.bxslider2').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600,
      adaptiveHeight: true,
    });
});

$(function(){
  $('.bxslider3').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 600
  });
});

$(function(){
  $('.bxslider4').bxSlider({
    infiniteLoop: false,
    hideControlOnEnd: true,
    slideWidth: 600
  });
});

$(document).ready(function(){
  $('.bxslider5').bxSlider({
    slideWidth: 200,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 10
  });
});

$(document).ready(function(){
  $('.bxslider7').bxSlider({
    pagerCustom: '#bx-pager',
    slideWidth: 900
  });
});

$(function(){
  $('.bxslider6').bxSlider({
    mode: 'vertical',
    slideMargin: 5,
    slideWidth: 600
  });
});

$(document).ready(function(){
  $('.bxslider8').bxSlider({
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    nextText: 'Onward →',
    prevText: '← Go back',
    slideWidth: 600
  });
});

$(document).ready(function(){
  $('#slider1').bxSlider({
    mode: 'fade',
    auto: true,
    autoControls: true,
    pause: 2000,
    slideWidth: 600
  });
});

$(document).ready(function(){
  $('#slider2').bxSlider({
    mode: 'fade',
    auto: true,
    autoControls: true,
    pause: 3000,
    slideMargin: 20,
    slideWidth: 600
  });
});

$(document).ready(function(){
  $('.bxslider10').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 350,
    slideMargin: 10,
    ticker: true,
    speed: 10000
  });
});


// $(document).ready(function(){
//   $('.slider').slick({
//       autoplay: true,         
//       autoplaySpeed: 2000,    
//       dots: true,             
//       arrows: true,           
//       infinite: true,         
//       speed: 500,             
//       slidesToShow: 1,        
//       slidesToScroll: 1
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,            // Infinite loop
        autoplay: {            // Auto play
            delay: 3000,       // 3 seconds
            disableOnInteraction: false,
            slideWidth: 600
        },
        pagination: {          // Pagination dots
            el: ".swiper-pagination",
            clickable: true,
            slideWidth: 600
        },
        navigation: {          // Next/prev buttons
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,      // Number of slides visible
        spaceBetween: 20,      // Space between slides
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".slider_swiper", {
        loop: true,  // Enable infinite loop
        autoplay: {  
            delay: 3000, // Set autoplay delay
            disableOnInteraction: false,
        },
        pagination: {
            el: ".slider_swiper1",
            type: "progressbar", // Use progress bar pagination
        },
        slidesPerView: 1,
        spaceBetween: 10,
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".slider_swiper2", {
        loop: false, // No infinite loop
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".slider_swiper3",
            hide: false, // Always show scrollbar
            draggable: true, // Enable dragging
        },
        slidesPerView: 2, // Show 2 slides at a time
        spaceBetween: 10, // Space between slides
    });
});

var swiper = new Swiper(".slider_swiper4", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".slider_swiper4",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("fixed-top", window.scrollY > 20);
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 20000,
  dots: true,
  navText: [$(".prev"), $(".next")],
  responsiveClass: true,
  smartSpeed: 2000,
  animateOut: "fadeOut",

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

function smallNav() {
  var element = document.getElementById("mobNav");
  element.classList.toggle("mobile-nav");
}

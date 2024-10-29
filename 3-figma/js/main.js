$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 35,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },

    1024: {
      items: 2,
    },
  },
});

AOS.init();

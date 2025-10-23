const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

 /*open */
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });
/*close */
   menuCloseButton.addEventListener("click", () => menuOpenButton.click());
   
/*close when click on link */
   navLinks.forEach(Link => {
    Link.addEventListener("click", () => menuOpenButton.click());
   });

/* Iniatialize Swiper */
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    
  breakpoitns: {
    0: {
      slidesPerView: 1
    }, 
    768: {
      slidesPerView: 2
    },  
     1024: {  
      slidesPerView: 3
    }
  }  
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true ,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    responsiveClass:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
      },

      breakpoints:{
        0:{
          slidesPerView:1,            
        },
        600:{
          slidesPerView:1,            
        },
        1000:{
          slidesPerView:1,           
        }
    }     
      
  });



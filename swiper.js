


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    } ,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
    breakpoints: {
        800: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            loop: false
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
  

  });
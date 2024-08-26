var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }
});
const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");


menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--opten')
})


const swiperOne = new Swiper('.feadback__slider', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  });


  const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: "2",
    spaceBetween: 20,
  
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      480: {
        slidesPerView: 3,
      }
    },
  
  });




const accordeon = document.querySelector(".accordeon");
const accordeonTitles = document.querySelectorAll(".accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function(accordeonTitle) {
  accordeonTitle.addEventListener("click", function() {
    const currentText = accordeonTitle.parentElement.querySelector(".accordeon__text");
    accordeonTitle.classList.toggle("accordeon__title--active");
    currentText.classList.toggle('accordeon__text--visible');

    if(currentText.classList.contains('accordeon__text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px';
    } else {
      currentText.style.maxHeight = null;
    }
  })
})


const anchors = document.querySelectorAll("a[href*='#']");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
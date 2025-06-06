//========================== СТИЛИЗАЦИЯ CHECKBOX ========================

$(".check-label").on("click", function () {
    let isChecked = $(this).children("input").prop("checked");
    if (isChecked) {
        $(this).find(".fakecheck").addClass("checked");
    } else {
        $(this).find(".fakecheck").removeClass("checked");
    }
});

//=================== Маска номера телефона ============

 $('input[type="tel"]').inputmask({
  "mask": "+7 (999) 999 - 99 - 99",
  "placeholder": "+7 (   )     -    -   ",
  "showMaskOnHover": false,
  "showMaskOnFocus": true
});


//=================== Слайдр галереи ============

const productSlider = new Swiper('.product-silder', {
    
    speed: 600,
    pagination: {
        el: ".product-silder-scrollbar",
        clickable: true,
    },
});

function sliderMouseSlideInit() {
    document.addEventListener("mousemove", function (e) {
        const targetElement = e.target;
        if (targetElement.closest("[data-mousemove-swipe]")) {
            const sliderElement = targetElement.closest(
                "[data-mousemove-swipe]"
            );
            const sliderItem =
                sliderElement.swiper.slides[getIndex(sliderElement)];
            const sliderLength = sliderElement.swiper.slides.length;

            if (sliderLength > 1) {
                const sliderWidth = sliderItem.offsetWidth;
                const sliderPath = Math.round(sliderWidth / sliderLength);
                const sliderMousePos =
                    e.clientX - $(sliderElement).offset().left;
                const sliderSlide = Math.floor(sliderMousePos / sliderPath);
                sliderElement.swiper.slideTo(sliderSlide);
            }
        }
    });


    // Добавляем событие для отслеживания ухода мыши с элемента слайдера
    document.querySelectorAll('[data-mousemove-swipe]').forEach(function(sliderElement) {
        sliderElement.addEventListener("mouseleave", function() {
            sliderElement.swiper.slideTo(0); // Возвращаем на первый слайд
        });
    });

    function getIndex(el) {
        return Array.from(el.parentNode.children).indexOf(el);
    }
}
  
if (document.querySelector('[data-mousemove-swipe]')) {
    sliderMouseSlideInit();
}



//=================== Слайдр объектов ============

// 1. Сначала объявляем функцию
function updateScrollbarProgress(swiper) {
  // swiper.scrollbar.el уже имеет класс swiper-scrollbar-horizontal
  const track = swiper.scrollbar.el;
  const progress = swiper.progress;
  if (track) {
    track.style.setProperty('--before-width', `${progress * 100}%`);
  }
}


// 2. Затем инициализируем Swiper
const swiper = new Swiper('.objects-gallery', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  centeredSlides: false,
  initialSlide: 0,
  keyboard: {
    enabled: true,
  },
  freeMode: true,
  scrollbar: {
    el: '.objects-scrollbar',
    draggable: true,
    dragSize: 80,
    snapOnRelease: true,
  },
  on: {
    setTranslate(swiper) {
      updateScrollbarProgress(swiper);
    },
    slideChange(swiper) {
      updateScrollbarProgress(swiper);
    },
    scrollbarDragMove(swiper) {
      updateScrollbarProgress(swiper);
    },
    scroll(swiper) {
      updateScrollbarProgress(swiper);
    }
  }
});




//========================== ФУНКЦИЛГАЛ FAQ ========================

$(".faq__item").on("click", function () {
    const $content = $(this).find('.faq__item-answer');
    const $header = $(this).find('.faq__item-question');
    
    if ($header.hasClass('open')) {
        $content.slideUp();
        $header.removeClass('open');
    } else {
        $(".faq__item").find('.faq__item-answer').slideUp();
        $(".faq__item").find('.faq__item-question').removeClass('open');

        $content.slideDown();
        $header.addClass('open');
    }
});
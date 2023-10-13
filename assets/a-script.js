let svgDote = `<svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.63669" cy="2.5" r="2" fill="#828071"/>
</svg>`;

$(() => {
  let swiper = new Swiper(".bannerSwiper", {
    breakpoints: {
      0: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            let zero = 0;
            if (index + 1 > 9) {
              let zero = "";
            }
            return `<span class="${className}">${zero}${
              index + 1
            } ${svgDote}</span>`;
          },
        },
      },
      767: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "custom",
          renderCustom: function (swiper, current, total) {
            if (current < 10) {
              current = "0" + current;
            }

            if (total < 10) {
              total = "0" + total;
            }
            return `<div class="swiper-pagination-custom">${current} ${svgDote} ${total} </div>`;
          },
        },
      },
    },
  });
});

$(() => {
  const swiperOur = new Swiper(".section-our__list", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next-our",
      prevEl: ".swiper-button-prev-our",
    },
    pagination: {
      el: ".swiper-pagination-our",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        // Your custom pagination rendering code here
        if (current < 10) {
          current = "0" + current;
        }

        if (total < 10) {
          total = "0" + total;
        }
        return `<div class="swiper-pagination-custom">${current} ${svgDote} ${total}</div>`;
      },
    },
    breakpoints: {
      501: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
      },
      650: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      767: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
      },
      1023: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });

  function swiperToggle(window, name, windowSize) {
    if (window < windowSize) {
      name.disable();
    } else {
      name.enable();
    }
  }

  swiperToggle($("window").width(), swiperOur, 501);
  $(window).resize(function () {
    swiperToggle($(this).width(), swiperOur, 501);
  });
});

$(() => {
  const swiperSlider = new Swiper(".section-slider-list", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next-slider",
      prevEl: ".swiper-button-prev-slider",
    },
    pagination: {
      el: ".swiper-pagination-slider",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        if (current < 10) {
          current = "0" + current;
        }

        if (total < 10) {
          total = "0" + total;
        }
        return `<div class="swiper-pagination-custom">${current} ${svgDote} ${total}</div>`;
      },
    },
  });
});

$(() => {
  const swiperSlider1 = new Swiper(".list-products-swiper-1", {
    slidesPerView: 4.5,
    slidesPerGroup: 1,
    spaceBetween: 30,
    
    navigation: {
      nextEl: ".container1 .swiper-button-next-product-collection",
      prevEl: ".container1 .swiper-button-prev-product-collection",
    },
    pagination: {
      el: ".container1 .swiper-pagination-product-collection",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        if (current < 10) {
          current = "0" + current;
        }

        if (total < 10) {
          total = "0" + total;
        }
        return `<div class="swiper-pagination-custom">${current} ${svgDote} ${total} </div>`;
      },
    },
    breakpoints: {
      100: {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop:true,
        centeredSlidesBounds: true,
        spaceBetween: 20,
      },
      501: {
        loop:false,
        centeredSlides: false,
        centeredSlidesBounds: false,
      },
      650: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
      },
      1023: {
        slidesPerView: 4.5,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    }
  });
});
$(() => {
  const swiperSlider2 = new Swiper(".list-products-swiper-2", {
    slidesPerView: 4.5,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
      100: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      501: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
      },
      1023: {
        slidesPerView: 4.5,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    }
  });
})


$(() => {
  const jsonFileUrl = '/assets/ваш_файл.json';

  // Сделайте GET-запрос для загрузки JSON-файла
  fetch(jsonFileUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);

    })
    .catch(error => {
      console.error('Произошла ошибка при загрузке JSON-файла', error);
    });



  $('.swatch-color').each(function(){

  });

});
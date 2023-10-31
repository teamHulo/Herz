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
  $(".section-our__list").each(function () {
    swiperOurSlider(
      $(this).attr("data-swiper"),
      $(this)
        .closest(".section-our")
        .find(".swiper-button-prev-our")
        .attr("data-btn"),
      $(this)
        .closest(".section-our")
        .find(".swiper-button-next-our")
        .attr("data-btn"),
      $(this)
        .closest(".section-our")
        .find(".swiper-pagination-our")
        .attr("data-btn")
    );
  });
  function swiperOurSlider(indef, btnprv, btnnext, pagination) {
    const swiperOur = new Swiper(
      ".section-our__list[data-swiper=" + indef + "]",
      {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: `.swiper-button-next-our[data-btn="${btnnext}"]`,
          prevEl: `.swiper-button-prev-our[data-btn="${btnprv}"]`,
        },
        pagination: {
          el: `.swiper-pagination-our[data-btn="${pagination}"]`,
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
      }
    );
    swiperToggle($(window).width(), swiperOur, 501);
  }
  function swiperToggle(windowWidth, swiper, windowSize) {
    if (windowWidth < windowSize) {
      swiper.disable();
    } else {
      swiper.enable();
    }
  }

  $(window).resize(function () {
    //swiperToggle($(this).width(), swiperOur, 501);
    $(".section-our__list").each(function () {
      swiperOurSlider($(this).attr("data-swiper"));
    });
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
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        centeredSlidesBounds: true,
        spaceBetween: 20,
      },
      501: {
        loop: false,
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
    },
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
    },
  });
});

$(() => {
  if ($("#url_json").length != 0) {
    const jsonFileUrl = $("#url_json").val();
    console.log(jsonFileUrl);

    fetch(jsonFileUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        $(".swatch-color").each(function () {
          let valueColor = $(this).val();
          let hexColor = data[0][valueColor];
          if (hexColor != undefined) {
            console.log($(this).val());
            $(this).closest(".my-cart-product").addClass("hex");
            console.log(hexColor);
            $(this)
              .closest(".div__wrap-swatcher-item")
              .find(".swatch-color-wrap")
              .css("background-color", hexColor);
          } else {
            $(this)
              .closest(".div__wrap-swatcher-item")
              .find(".swatch-color-wrap")
              .css("background-color", valueColor);
          }
        });
      })
      .catch((error) => {
        console.error("Произошла ошибка при загрузке JSON-файла", error);
      });
  }
});

$(() => {
  let valCheck = $(".swatch-color:checked").val();
  $(".swatch__name p").text(valCheck);
  $(".swatch-color").on("change", function () {
    let valColor = $(this).val();
    $(".swatch__name p").text(valColor);
  });
});

$(() => {
  $(document).mouseup(function (e) {
    let container = $(".my-custom-select-product-wrap");
    if (container.has(e.target).length === 0) {
      $(".my-custom-select-product-wrap").removeClass("active");
    }
  });
  $(".my-input-radio").each(function () {
    let isChecked = $(this).prop("checked");
    if (isChecked) {
      let valInput = $(this).val();
      console.log(valInput);
      $(this)
        .closest(".my-custom-select-product-wrap")
        .find(".custom-select-value p")
        .text(valInput);
    }
  });

  $(".my-input-radio").on("change", function () {
    let valInput = $(this).val();
    $(this)
      .closest(".my-custom-select-product-wrap")
      .find(".custom-select-value p")
      .text(valInput);
  });

  $(".select__wrap-header").on("click", function () {
    $(this).closest(".my-custom-select-product-wrap").toggleClass("active");
  });

  $(".tabs__header li").on("click", function () {
    let indx = $(this).index();
    $(".tabs__header li").removeClass("active");
    $(this).addClass("active");
    $(".product__tabs-wrap .tab").removeClass("active");
    $(this)
      .closest(".product__tabs-wrap")
      .find(".tab")
      .eq(indx)
      .addClass("active");
  });
  $(".product-tab-mobile .tab-item").on("click", function () {
    $(this).toggleClass("active");
  });
});

/**** Add product cart item ****/

$(() => {
  /*function cartImageUpdate(src, cart){
    if( src != '' && src != undefined && src != null){
      $(cart).find('.product_image-wrap img').attr('src',src);
    }
  }*/
  console.log('213123123');
  function cartImageUpdate(src, cart) {
    if (src != "" && src != undefined && src != null) {
      const image = $(cart).find(".product_image-wrap img");
      image.attr("src", src);
    }
  }

  function updateVariantId(cart, id, colorValue, optionIndex) {
    let newId;
    let imgUrl;
    let option1, option2, option3;
    if (cart && cart.querySelector) {
      let variantData = JSON.parse(
        cart.querySelector('[type="application/json"]').textContent
      );
      console.log(variantData);
      for (let i = 0; i < variantData.length; i++) {
        if (variantData[i].id == id) {
          option1 = variantData[i].option1;
          option2 = variantData[i].option2;
          option3 = variantData[i].option3;
        }
      }
      if (optionIndex == 1) {
        option1 = colorValue;
      } else if (optionIndex == 2) {
        option2 = colorValue;
      } else {
        option3 = colorValue;
      }
      console.log(option1, option2, option3);
      for (let i = 0; i < variantData.length; i++) {
        if (
          (variantData[i].option1 === option1 || option1 === undefined) &&
          (variantData[i].option2 === option2 || option2 === undefined) &&
          (variantData[i].option3 === option3 || option3 === undefined)
        ) {
          newId = variantData[i].id;
          imgUrl = variantData[i].featured_image.src;
          break;
        }
      }
    }
    $(cart).find(".cart-id-first").val(newId);
    cartImageUpdate(imgUrl, cart);
  }

  function handleResponse() {
    let a = this.responseText;
    console.log(a);
    let parser = new DOMParser();
    console.log(parser);
    let objCarts = JSON.parse(this.responseText);
    console.log(objCarts);
    $("#cart-icon-bubble").html($(objCarts["cart-icon-bubble"]).html());
    $("cart-drawer").html(
      $(objCarts["cart-drawer"]).find("cart-drawer").html()
    );
  }

  $(".colors .my-input-radio").change(function () {
    let cart = $(this).closest(".my-cart-product")[0];
    let colorValue = $(this).val();
    let optionCount = $(this)
      .closest(".my-cart-product")
      .find("[data-option-id]")
      .attr("data-option-id");
    let id = $(this).closest(".my-cart-product").find(".cart-id-first").val();
    updateVariantId(cart, id, colorValue, optionCount);
  });

  $(".add-my-cart").on('click', function (e) {
    console.log('CLICK')
    e.preventDefault();
    let variant = $(this)
      .closest(".my-cart-product")
      .find(".cart-id-first")
      .val();
    formData = {
      id: variant,
      quantity: 1,
    };

    fetch(window.Shopify.routes.root + "cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        const request = new XMLHttpRequest();
        request.addEventListener("load", handleResponse);
        request.open(
          "GET",
          "?sections=cart-drawer,main-cart-items,cart-icon-bubble",
          true
        ); ///?sections=cart-drawer,
        request.send();
        $("cart-drawer")[0].open();
        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(function () {
        $("cart-drawer").removeClass("is-empty");
      });
  });

  $(".count-option").click(function () {
    $(this).closest(".my-cart-product").find(".colors").toggleClass("active");
  });
});

/********* end **** */

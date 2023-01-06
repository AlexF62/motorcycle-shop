$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"> <img src="/images/arrow-left.svg" alt=""> </button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"> <img src="/images/arrow-right.svg" alt=""> </button>',

      responsive: [
        {
          breakpoint: 969,
          settings: {
            arrows: false
          }
        },
        
        
      ]
  });

  /*Tabs */
  $(".tab").on("click", function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find("div")).removeClass(
      "tabs-content--active"
    );
    $(this).addClass("tab--active");
    $($(this).attr("href"));
    $($(this).attr("href")).addClass("tabs-content--active");
  });
  /* Products */
  $(".product-item__favorite").on("click", function () {
    $(this).toggleClass("product-item__favorite--active");
  });

  /* Slick Slider */
  $(".product-slider").slick({
    slidesToshow: 3,
    slidesToScroll: 3,
    prevArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnprev"> <img src="/images/arrow-black-left.svg" alt=""> </button>',
    nextArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnnext"> <img src="/images/arrow-black-right.svg" alt=""> </button>',
  });

  $(".filter-style").styler();
  $(".filter__item-drop, filter__extra").on("click", function () {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle(300);
  });




  $("#demo_1").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "$"
});

$('.catalog__filter-btngrid').on('click', function(){
  $(this).addClass('catalog__filter-button--active');
  $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
  $('.product-item__wripper').removeClass('product-item__wripper--list');
});

$('.catalog__filter-btnline').on('click', function(){
  $(this).addClass('catalog__filter-button--active');
  $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
  $('.product-item__wripper').addClass('product-item__wripper--list');
});
  
});

 /* Rate */
$(function () {
 
  $("#rateYo").rateYo({
    starWidth: "40px",
    ratedFill: "#1c62cd"
  });

  $('.menu__btn').on('click', function(){
   $('.menu-mobile__list ').toggleClass('menu-mobile__list--active')
  });
 
});
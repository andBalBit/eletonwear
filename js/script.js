$(document).ready(function () {
    $('.slider').slick({
       slidesToShow: 1,
       infinite: true,
       slidesToScroll: 1,
       arrows: true,
    });
    $(".slider").on('afterChange', function(event, slick, currentSlide){
     $("#num").text(currentSlide + 1 + " ");
  });
    $('.slider_child').slick({

    });
  $(".slider_child").on('afterChange', function(event, slick, currentSlide){
     $("#num2").text(currentSlide + 1 + " ");
  });



$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
   
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 7,
  asNavFor: '.slider-for',
  infinite: true,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
});

$('.reviews_slider').slick({
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  adaptiveHeight: true
});



$('.slider_item').hover(function(){
    $(this).children('span').css('color', '#fff');
    $(this).children('img').css('filter', 'invert(1)');
    }, function(){
    $(this).children('span').css('color', '#000');
    $(this).children('img').css('filter', 'hue-rotate(45deg)');

  });



});

 

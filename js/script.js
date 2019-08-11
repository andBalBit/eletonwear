$(document).ready(function () {
    $('.slider').slick({
       slidesToShow: 1,
       infinite: true,
       slidesToScroll: 1,
       arrows: true,
    });
    $(".slider").on('afterChange', function(event, slick, currentSlide){
     $("#cp").text(currentSlide + 1 + " ");
  });
    $('.slider_child').slick({

    });




//      $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true  
});


$( ".as" ).hover(function() {
  $('.as span').css('color', '#fff');
  $('svg').css({ fill: "#fff" });
});


$('.as svg').attr('fill', 'green'); 


});

 

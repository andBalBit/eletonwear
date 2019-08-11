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

// $(function)
// $( ".slider_item" ).hover(function() {
//   $('.slider_item span').css('color', '#fff');
//   $('svg').css({ fill: "#fff" });
// });


$('.slider_item').hover(function(){
    $(this).children('span').css('color', '#fff');
    $(this).children('img').css('filter', 'invert(1)');
    }, function(){
    $(this).children('span').css('color', '#000');
    $(this).children('img').css('filter', 'hue-rotate(45deg)');

  });
//   $(function () {
//         if ((".slider_item" ).hover) {
//           $('.slider_item span').css('color', '#fff');
//           $('svg').css({ fill: "#fff" });
//         }
//     })
// $('.slider_item svg').attr('fill', 'green'); 


});

 

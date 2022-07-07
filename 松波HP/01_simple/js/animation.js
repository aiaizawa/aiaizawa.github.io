// navi
$('.nav_toggle').on('click',function(){
  $('.nav_toggle, .nav').toggleClass('show');
});

$('.nav_menu_li').on('click',function(){
  $('.nav_toggle, .nav').toggleClass('show');
});


// aco
$(function(){
  //クリックで動く
  $('.aco_open').click(function(){
    $(this).toggleClass('active');
    $(this).next('.aco').slideToggle();
  });
});


// carousel

$('.carousel').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2000,
  fade: true,
  cssEase: 'linear'
});
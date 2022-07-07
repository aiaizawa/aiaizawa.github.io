$('.nav_toggle').on('click',function(){
  $('.nav_toggle, .nav').toggleClass('show');
});

$('.nav_menu_li').on('click',function(){
  $('.nav_toggle, .nav').toggleClass('show');
});

$('.carousel').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2000,
  fade: true,
  cssEase: 'linear'
});

// 動きのきっかけの起点となるアニメーションの名前を定義
function slideAnime(){

  // ふわっ
  $('.slide_in_r_trigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('slide_in_r');// 画面内に入ったらfadeUpというクラス名を追記
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

function slideAnime_l(){

  // ふわっ
  $('.slide_in_l_trigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('slide_in_l');// 画面内に入ったらfadeUpというクラス名を追記
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    slideAnime_l();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

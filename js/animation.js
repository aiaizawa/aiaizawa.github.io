// navi
$('.nav_toggle').on('click',function(){
  $('.nav_toggle, .nav').toggleClass('show');
});

$('.nav_menu_li').on('click',function(){
  $('.nav_toggle, .nav').toggleClass('show');
});


// 動きのきっかけの起点となるアニメーションの名前を定義
function spread_anime(){
  // ふわっ
  $('.spread_trigger').each(function(){ //spread_triggerというクラス名が
    var elemPos = $(this).offset().top-10;//要素より、10px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('spread');// 画面内に入ったらspreadというクラス名を追記
    $('.appear_trigger').addClass('appear');// 画面内に入ったら.appearというクラス名を追記
    }
  });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  spread_anime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 動きのきっかけの起点となるアニメーションの名前を定義
function extend_anime(){
  // ふわっ
  $('.extend_trigger').each(function(){ //extend_triggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('extend');// 画面内に入ったらextendというクラス名を追記
    }
  });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  extend_anime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


// aco
$(function(){
  //クリックで動く
  $('.aco_open').click(function(){
    $(this).toggleClass('active');
    $(this).fadeOut();
    $(this).next('.aco').slideToggle();
    $('.aco_close').fadeIn();
  });
});

$(function(){
  //クリックで動く
  $('.aco_close').click(function(){
    $('.aco').slideToggle();
    $(this).fadeOut();
    $('.aco_open').fadeIn();
  });
});

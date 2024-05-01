// jsを記述する際はここに記載していく
$(document).ready(function(){

  $('.more-btn').on('click',function(){
    $('.more-btn').toggleClass('active');
    if ($('.more-btn').hasClass('active')){
      $('.more-btn').html('CLOSE');     
    }else{
      $('.more-btn').html('MORE');
    };
    $('.news-hide').toggleClass('active');
  });

  $('.header__humburger').on('click',function(){
    $('.header__humburger').toggleClass('active');
    $('.header__nav').toggleClass('active');
  });

  $('.nav-list-text').on('click',function(){
    $('.header__nav').removeClass('active');
    $('.header__humburger').removeClass('active');
  });

  $('.about__image').slick({
    slidesToShow:3,
    slidesToScroll:1,
    autoplay:true,
    infinite:true,
    swipe:false,
    allows:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    autoplaySpeed:2000,
    variableWidth:false,
    responsive:[
      {
        breakpoint:756,
        settings:{
          slidesToShow:1,
        },
      },
    ],
  });


  $('.footer').on('mouseover',function(){
  $('.mouse-stoker').css({'display':'block'});
  $('.mouse').addClass('active');
    });
    $('.footer').on('mouseout',function(){
    $('.mouse-stoker').css({'display':'none'});
    $('.mouse').removeClass('active');
  });

  $('.rha').on('mouseover',function(){
    $('.message').css({'display':'block'});
  });
  $('.rha').on('mouseout',function(){
    $('.message').css({'display':'none'});
  });

  $(document).on('mousemove',function(e){
    /*ブラウザウィンドウ内でマウスの座標を取得*/ 
    let x = e.clientX;
    let y = e.clientY;
    /*CSSのtranslateの値にxとyを代入しマウスストーカーを動かす*/
    $('.mouse-stoker').css({
      "transform":"translate(" + x + "px," + y + "px)"
    });
  });

});


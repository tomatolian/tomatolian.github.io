$(function () {

  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });
  $(".mv-title").one("click",function(){
    $(".mv-title").fadeOut(2000,function(){
      $(".mv-title").text("とまとりあん");
    }).fadeIn(
      2000
    )
  });
  $(".mv-subtitle").one("click",function() {
    $(".mv-subtitle").fadeOut(2000,function(){
      $(".mv-subtitle").text("ぽーとふぉりお");
    }).fadeIn(2000)
    });
  function fadeAnime(){
    $('.fadeUpTrigger').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');
      }else{
      $(this).removeClass('fadeUp');
      }
      });
    }
    $(window).scroll(function (){
      fadeAnime();
    });
    $(".false1").one("click",function(){
      $(".false1").fadeOut(1000,function(){
        $(".false1").css("color","red").text("無能")
      }).fadeIn(1000)
    });
    $(".false2").one("click",function(){
      $(".false2").fadeOut(1000,function(){
        $(".false2").css("color","red").text("何もわかりません...")
      }).fadeIn(1000)
    });
    $(".false3").one("click",function(){
      $(".false3").fadeOut(1000,function(){
        $(".false3").css("color","red").text("働かずに遊んで暮らす事です。")
      }).fadeIn(1000)
    });
  });


$(function () {
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });
  $(window).on('load', function() {
    element = document.getElementsByName('language')
    len=element.length
    for (let i = 0; i < len; i++){
      if (element[0].checked){
        $('.'+element[i].value).removeClass("hide_item")
      }
      else if (element[i].checked){
        $('.'+element[i].value).removeClass("hide_item")
        console.log('.'+element[i].value)
      }
      else{
        $('.'+element[i].value).addClass("hide_item")
        console.log('.'+element[i].value)
      }
    }  
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
    $("box-radio").on("click", function () {

      return false;
    });
    $('input').change(function(){
      element = document.getElementsByName('language')
      len=element.length
      for (let i = 0; i < len; i++){
        if (element[0].checked){
          $('.'+element[i].value).removeClass("hide_item")
        }
        else if (element[i].checked){
          $('.'+element[i].value).removeClass("hide_item")
          console.log('.'+element[i].value)
        }
        else{
          $('.'+element[i].value).addClass("hide_item")
          console.log('.'+element[i].value)
        }
      }
    }); 
  });



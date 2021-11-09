$(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        var img_pass = $(this).children("img").attr('src')
        console.log(img_pass)
        $(".modal-img").attr("src",img_pass)
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });

});
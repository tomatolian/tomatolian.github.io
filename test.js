$(function() {
    $.getJSON("https://github.com/tomatolian/tomatolian.github.io/blob/master/works.json",(data)=>{
        var text=data.work1
        $(".text1").text(text)
    });

});
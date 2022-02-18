$(function() {
    var params=location.hash;
    if (params.length!=0) {
        $("#all").prop("checked",false)
        $(params).prop("checked",true)
    }
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

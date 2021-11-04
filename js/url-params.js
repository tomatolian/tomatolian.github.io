$(function() {
    var params=location.hash;
    if (params.length!=0) {
        $("#all").prop("checked",false)
        $(params).prop("checked",true)
        console.log(params)
    }
});

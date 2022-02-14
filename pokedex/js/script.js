$(function(){
    var count=1
    var request = new XMLHttpRequest();
    setInterval(() =>{
            var num = Math.floor(Math.random()*898)+1
            request.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+num, true);
            var pass='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+num+'.png'
            request.responseType = 'json';
            request.onload = function () {
                var data = this.response;
                console.log(data["name"])
                var type1=data['types'][0]['type']["name"]
                if (data["types"].length==1){
                     var type2="none"
                }else{
                    var type2=data['types'][1]['type']["name"]
                     
                }
                $.when(
                    $(".img-slide").fadeOut(1000),
                    $(".img-box").children("p").fadeOut(1000),
                    $(".p-data").hide(1000)
                ).done(function(){
                    $(".img-slide").attr("src",pass)
                    $("#name").text(data['name'])
                    $("#type1").text(type1)
                    $("#type2").text(type2)
                    $("#height").text(data['height']/10 +'m')
                    $("#weight").text(data['weight']/10 +'kg')
                    $(".img-slide").on('load',function(){
                    $(".img-slide").fadeIn(1000)
                    $('.p-data').show(1000)
                    })
                });
            };
            request.send();
    },10000)
})
$(function(){
    var num=1
    var request = new XMLHttpRequest();
    for (let i=1;i<899;i++){
        $('.wrapper').append('<div id=\"'+num+'\"><img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+num+'.png\" alt=""></div>')   
        num+=1
    }
    $(".wrapper").children('div').on("click",function(){
        var id=$(this).attr('id')
        var url='https://pokeapi.co/api/v2/pokemon/'+id
        $.ajax({
            url: url,
            type:'GET',
            cache: true, 
            timeout: 1000, 
        }).done(function(data){
            var total =data['stats'][0]['base_stat']+data['stats'][1]['base_stat']+data['stats'][2]['base_stat']+data['stats'][3]['base_stat']+data['stats'][4]['base_stat']+data['stats'][5]['base_stat']
            $(".modal__content").children('img').attr('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png')
            $('.modal-title').children('p').text(data['name'])
            $('#hp').text(data['stats'][0]['base_stat'])
            $('#at').text(data['stats'][1]['base_stat'])
            $('#df').text(data['stats'][2]['base_stat'])
            $('#sp-a').text(data['stats'][3]['base_stat'])
            $('#sp-d').text(data['stats'][4]['base_stat'])
            $('#speed').text(data['stats'][5]['base_stat'])
            $('#total').text(total)
            $('.js-modal').fadeIn()
        })
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
})
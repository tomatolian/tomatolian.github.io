$(function(){
    setInterval(function(){
        $.ajax({
            type: "GET",
            url: "https://script.google.com/macros/s/AKfycbzxr6DQr0oYjudCtXLHP8Jo_UaO7kWHAdsTht87YBCrCBzm8puSU7VGlskBSn8p3QKu-g/exec",
            dataType : "json"
          }).done(function(data){
            console.log(data['data'])
            $('.test').children().remove();
            $('.canvs').children().remove();
            data['data'].forEach(function(element,ind){ 
              $('.canvs').append("<div id='target"+ind+"' class='target'><p>"+element['created_at'].split('.')[0].replace('T','\n')+"</p><p>"+element['text']+"</p></div>");
              $('.test').append("<a-plane position='"+(Math.floor((ind+1)/4)*2.5-5)+" 0 "+((ind%4)*1.5-2)+"' rotation='-90 0 0' width='2' height='1.25' material='shader:html;target: #target"+ind+";'></a-plane>");
              } 
            );
          })
    },10000);
})
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = $('.mv').width();
var h = $('.mv').height()+$(".header").height();
$('#canvas').attr('width', w);
$('#canvas').attr('height', h);
var t = 0.1;
var s = 100;
var n = 10000;
var pattern = Math.floor(Math.random() *6);
if (pattern==0) { //寒天
    var t = 0.2;
    var s = 100;
    var n = 20;
    ctx.fillStyle="#fff"
    ctx.fillRect(0, 0,canvas.width, canvas.height);
    for (let i=0; i<n ;i++) {
        var randnum_x = Math.floor( Math.random() * w );
        var randnum_y = Math.floor( Math.random() * h );
        ctx.fillStyle = "rgba(" + [0, 0, 255, t] + ")";
        ctx.fillRect(randnum_x, randnum_y, s, s);
    };
    for (let i=0; i<n ; i++) {
        var randnum_x = Math.floor( Math.random() * w );
        var randnum_y = Math.floor( Math.random() * h );
        ctx.fillStyle = "rgba(" + [0, 255, 0, t] + ")";
        ctx.fillRect(randnum_x, randnum_y, s, s);
    };
    for (let i=0; i<n ; i++) {
        var randnum_x = Math.floor( Math.random() * w );
        var randnum_y = Math.floor( Math.random() * h );
        ctx.fillStyle = "rgba(" + [255, 0, 0, t] + ")";
        ctx.fillRect(randnum_x, randnum_y, s, s);
    };
} else if (pattern==1) {　//bdsp
    ctx.fillStyle="#000"
    ctx.fillRect(0, 0,canvas.width, canvas.height);
    $(".mv").css("color","white");
    var t = 0.3;
    var s = 100;
    var n = 1000;
    for (let i=0; i<n ;i++) {
        ctx.beginPath();
        var randnum_x = Math.floor( Math.random() * w );
        var randnum_y = Math.floor( Math.random() * h );
        console.log(randnum_x,randnum_y)
        ctx.strokeStyle = "rgba(" + [0, 0, 255, t] + ")";
        ctx.moveTo(0, h);
        ctx.lineTo(randnum_x, randnum_y);
        ctx.stroke();
    };
    for (let i=0; i<n ; i++) {
        var randnum_x = Math.floor( Math.random() * w );
        var randnum_y = Math.floor( Math.random() * h );
        ctx.beginPath();
        ctx.strokeStyle = "rgba(" + [255, 0, 255, t] + ")";
        ctx.moveTo(w, 0);
        ctx.lineTo(randnum_x, randnum_y);
        ctx.stroke();
    };
} else if (pattern==2) { //マル
    var t = 1;
    var s = 50;
    var n = 40;
    for (let i=0; i<n ;i++) {
        ctx.beginPath();
        var randnum_x = Math.floor( Math.random() * w );
        var randnum_y = Math.floor( Math.random() * h );
        var rand_r = 176 + Math.floor( Math.random() * 80 );
        var rand_g = 176 + Math.floor( Math.random() * 80 );
        var rand_b = 176 + Math.floor( Math.random() * 80 );
        ctx.fillStyle = "rgba(" + [rand_r, rand_g, rand_b, t] + ")";
        ctx.arc(randnum_x, randnum_y, s,0, 2 * Math.PI,true);
        ctx.fill();
    
};
} else if (pattern==3) { //ドーナッツ
    var t = 1;
    var s = 50;
    var n = 20;
    for (let i=0; i<n ;i++) {
        ctx.beginPath();
        var randnum_x = Math.floor( Math.random() * w );
        var randnum_y = Math.floor( Math.random() * h );
        var rand_r = 128 + Math.floor( Math.random() * 100 );
        var rand_g = 128 + Math.floor( Math.random() * 100 );
        var rand_b = 128 + Math.floor( Math.random() * 100 );
        ctx.fillStyle = "rgba(" + [rand_r, rand_g, rand_b, t] + ")";
        ctx.arc(randnum_x, randnum_y, s,0, 2 * Math.PI,true);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + [255, 255, 255, 1] + ")";
        ctx.arc(randnum_x, randnum_y, s*0.8, 0, 2 * Math.PI,true);
        ctx.fill();
};
} else if (pattern==4) {  //ランドルト 
    $(".mv-title").css("text-stroke","1px #FFF");
    $(".mv-subtitle").css("text-stroke","1px #FFF");
    $(".mv-text").css("text-stroke","0.4px #FFF");
    var t = 1;
    var s = 50;
    var n = 30;
    for (let i=0; i<n ;i++) {
        ctx.beginPath();
        var randnum_x = Math.floor( Math.random() * w );
        var randnum_y = Math.floor( Math.random() * h );
        var rand_r = 128 + Math.floor( Math.random() * 100 );
        var rand_g = 128 + Math.floor( Math.random() * 100 );
        var rand_b = 128 + Math.floor( Math.random() * 100 );
        var theta= Math.floor( Math.random() * 360 );
        ctx.fillStyle = "rgba(" + [0, 0, 0, t] + ")";
        ctx.arc(randnum_x, randnum_y, s,0, 2 * Math.PI,true);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + [255, 255, 255, 1] + ")";
        ctx.arc(randnum_x, randnum_y, s*0.7, 0, 2 * Math.PI,true);
        ctx.fill();
        ctx.beginPath();
        ctx.strokeStyle = "rgba(" + [255, 255, 255, t] + ")";
        ctx.moveTo(randnum_x, randnum_y);
        ctx.lineWidth = s*0.3;
        ctx.lineTo(s*  1.01 * Math.cos(theta)+randnum_x, s * 1.01* Math.sin(theta)+randnum_y);
        ctx.stroke();
};

} else if (pattern==5) { 
    $(".mv-title").css("text-stroke","1px #FFF");
    $(".mv-subtitle").css("text-stroke","1px #FFF");
    $(".mv-text").css("text-stroke","1px #FFF");
    var t = 1;
    var s = 3;
    n1 = Math.floor( w / 5)
    console.log(n1*n)
    console.log(w)
    console.log(Math.floor( w / 5))
    ctx.fillStyle="#000"
    ctx.fillRect(0, 0,canvas.width, canvas.height);
    for (i=0; i<n1; i++) {
        var randnum1 = Math.floor( Math.random() * 80);
        for (j=0; j<randnum1; j++) {
            var randnum2 = Math.floor( Math.random() * 10);
            ctx.font = "5px";
            ctx.fillStyle = "rgba("+[0,255,0,1/(0.8*(randnum1-j))]+")";
            console.log()
            ctx.fillText(randnum2,5*i,j*10);
        }
        
    }
}
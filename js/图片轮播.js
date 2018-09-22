window.onload=init;
var i=1;
var dingshiqi;
function init(){
    dingshiqi=window.setInterval('tupian()',2000);
}

function tupian(){
    i++;
    if(i>3){
        i=1;
    }
    var obj=document.getElementById('d1');
    obj.src="images/"+i+".jpg";
}
function stopTu(){
    window.clearInterval(dingshiqi);
}
function tanchu(){
    alert("莫道世间真意少，前尘往事断肠诗。侬为君痴君不知，自古人间多情痴————执念");
}


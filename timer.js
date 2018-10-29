var timerData = new Date("Dec 31, 2018 23:59:59").getTime();
var x = setInterval(function(){
    var atual = new Date().getTime();
    var distancia = timerData - atual;
    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
    if (distancia < 0){
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Fim";
    }
}, 1000);    
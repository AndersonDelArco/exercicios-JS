var hours, min, sec;
var day = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');
var mounth = new Array('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'stembro', 'outubro', 'novembro', 'dezembro');
var clock = function() {
    var date = new Date();
    hours = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours();
    min = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
    sec = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();
    var time = hours + ":" + min + ":" + sec;
    var fullDate = day[date.getDay()] + ', ' + date.getDate() + ' de ' + mounth[date.getMonth()] + ' de ' + date.getFullYear();
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = fullDate;
}

setInterval(function(){
    clock();
}), 1000;


    
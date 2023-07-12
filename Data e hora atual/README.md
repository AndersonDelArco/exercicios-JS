Exercício Data e Hora Atual

Adicionar novo elemento no HTML, que mostre a data e hora atual do seu computador.

RESPOSTA PROPOSTA:

index.html
    <h1 class="time" id="time">Data e Hora Atual</h1>
    <p id="date"></p>

script.js
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

style.css
    body {
    margin: auto;
    background-color: rgb(39, 39, 39);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;    
    }
    h1 {
    color: rgb(235, 188, 88);
    text-align: center;
    }
    p {
    margin-top: -50px;
    font-size: 0.5em;
    color: rgb(236, 236, 236);
    text-align: center;
    }




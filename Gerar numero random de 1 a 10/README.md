Exercício gerar número random de 1 a 10

Crie um botão que ao clicar exiba uma mensagem com um número aleatório de 1 a 10.

RESPOSTA PROPOSTA:

HTML
    <h1>Gerar Número Random de 01 a 10</h1>    
    <button onclick="document.getElementById('gerador').innerHTML = getRndInteger(1,10)">Gerado de Números</button>
    <p id="gerador"></p>

SCRIPT.JS
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;    
    }

STYLE.CSS
    body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #dfdfdf;
    text-align: center;
    font-size: 1.5em;
    }

    button {
    box-sizing: border-box;
    border-radius: 50px;
    font-size: 1.2em;
    text-align: center;
    width: 500px;
    height: 70px;
    background-color: black;
    color: #dfdfdf;
    margin: 50px;
    border-bottom: gray;
    }

    button:hover {
    background-color: gray;
    color: rgb(230, 10, 10);
    font-style: italic;
    }

    p {
    background-color: white;
    color: rgb(194, 21, 9);
    padding: 25px;    
    margin: auto;
    font-size: 5em;
    font-weight: bold;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    }
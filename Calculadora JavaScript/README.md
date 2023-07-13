Exercício Calculadora JavaScript

Crie um página com dois inputs e um botão para cada operação: soma, subtração, multiplicação e divisão.

SOLUÇÃO PROPOSTA:

HTML
    <body>
    <h1>Calculadora JavaScript</h1>
    
    <div class="container">        
        <input type="number" id="num1" placeholder="Digite o primeiro número">
        <input type="number" id="num2" placeholder="Digite o segundo número">
        <button id="soma" onclick="sum()">Somar</button>
        <button id="subtrai" onclick="subtract()">Subtrair</button>
        <button id="multiplica" onclick="multiply()">Multiplicar</button>
        <button id="divide" onclick="divide()">Dividir</button>        
        <h2>Resultado: <span id="result"></span></h2>    
    </div>      
    </body>

JAVASCRIPT
    function sum() {
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);
        var result = num1 + num2;
        document.getElementById('result').innerHTML = result;
    }

    function subtract() {
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);
        var result = num1 - num2;
        document.getElementById('result').innerHTML = result;
    }

    function multiply() {
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);
        var result = num1 * num2;
        document.getElementById('result').innerHTML = result;
    }

    function divide() {
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);
        var result = num1 / num2;
        document.getElementById('result').innerHTML = result;
    }

STYLE
    * {
        font-family: Arial, Helvetica, sans-serif;
    }

    h1 {
        text-align: center;   
        color: rgb(14, 14, 14);
        font-size: 3em;
    
    }

    .container {
        margin: 50px auto;
        width: 300px;
        text-align: center;
    }

    input[type="number"] {
        background-color: rgb(214, 214, 214);
        text-align: center;
        margin-bottom: 10px;        
        padding: 5px;
        width: 250px;
        height: 50px;
    }

    button {
        text-align: center;
        margin-bottom: 10px;        
        padding: 2px;
        width: 250px;
        height: 50px;
    }

    #soma {
        background-color: #3c863c;
        color: white;
        font-size: 1.5em;
        border-radius: 25px;
    }

    #subtrai {
        background-color: #c22915;
        color: white;
        font-size: 1.5em;
        border-radius: 25px;
    }

    #multiplica {
        background-color: #405cb8;
        color: white;
        font-size: 1.5em;
        border-radius: 25px;
    }

    #divide {
        background-color: #e4b10a;
        color: white;
        font-size: 1.5em;
        border-radius: 25px;
    }

    #result {
        font-size: 2em;        
    }

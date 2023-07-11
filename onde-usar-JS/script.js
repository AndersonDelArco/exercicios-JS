/* AULA JS COMENTÁRIO */
console.log('Hello World');

console.log(2 * 7);

// Buscar o botão pelo Id
var btnDark = document.getElementById('btnDark');

// Adicionar evento ao click no botão
btnDark.addEventListener('click', function(){    
    document.body.style.backgroundColor = 'black'; //comando usado para mudar a cor para black referente ao Dark Mode.
    console.log('Mudando para dark mode'); // comando usado para monitorar a execução do código.
});

// Buscar o botão pelo Id
var bntLight = document.getElementById('btnLight');

// Adicionar evento ao click no botão
bntLight.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightgray'; //comando usado para mudar a cor para lighgray referente ao Light Mode.
    console.log('Mudando para o light mode'); // comando usado para monitorar a execução do código.
});


/* AULA JS VARIÁVEIS */

var nomeCompleto = 'Anderson Del Arco'; // o comarndo "var" cria uma variável e permite que se crie outra varivel com o mesmo nome, assumindo o novo valor dado à mesma variável.
var idade = 54;
var dataNascimento;

const pi = 3.14;
const code = 'TRUSTED';

let nome = 'Anderson'; // let é uma forma de criar uma variável sem o risco de criar uma variável já existente.


/* AULA JS TIPOS DE DADOS */

var nomeCompleto = 'Anderson Del Arco'; // variável tipo string
var idade = 54; // variável tipo número


/* AULA JS CLASSES E OBJETOS */

var pessoa = {nome: 'Anderson',idade: 54};

class Pessoa {
    constructor(nome,idade,endereco){
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
    }

    andar(){
        console.log('A pessoa' + this.nome + 'está andando...');
    }
}

var pessoa1 = new Pessoa('Anderson',54,'Rua Marechal Deodoro');


/* AULA JS ESTRUTURA CONDICIONAIS */

var inputPlayer1 = document.getElementById('player1');
var inputPlayer2 = document.getElementById('player2');

function showResult(){

    // Mostrar 3 possíveis resultados: Player 1 ganhou, player 2 ganhou, empate

    var scorePlayer1 = parseFloat(inputPlayer1.value);
    var scorePlayer2 = parseFloat(inputPlayer2.value);

    if(scorePlayer1 > scorePlayer2){
        alert('O jogador 1 venceu!');
    } else if(scorePlayer2 > scorePlayer1){

        alert('O jogador 2 venceu!');
    } else{

        alert('Jogo empatou!');
    }    
}

    // Mostrar dia da semana - ver por extenso

    function showWeedDay(){

        var dayOfWeek = parseInt(inputWeekDay.value);

        switch (dayOfWeek){

            case 1:
                alert("Segunda-feira");
                break;
            case 2:
                alert("Terça-feira");
                break;
            case 3:
                alert("Quarta-feira");
                break;
            case 4:
                alert("Quinta-feira");
                break;
            case 5:
                alert("Sexta-feira");
                break;
            default:
                alert("Não foi possível identificar o dia da semana.");

        }
    }


/* AULA JS ESTRUTURAS DE CONTROLE */

    




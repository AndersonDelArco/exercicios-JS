# exercicios-JS

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

// Typeof é utilizado para ver o tipo de variável que foi utilizado. É importante para verificar antes de fazer determinada ação, uma vez que o JavaScript é um tipo de programação não tipada.


/* AULA JS OPERADORES */

    Operadores Aritiméticos: + - * / % ++ --
        + = Adição
        - = Subtração
        * = Multiplicação
        / = Divisão
        % = Resto da divisão
        ++ = Acresce valor
        -- = Decresce valor

    Operadores Atribuição: = += -= *= /= %=
        = = Atribuição
        += = Atribuição de Soma (X+=Y) é o mesmo que (x=x+y)
        -= = Atribuição de subtração (X-=Y) é o mesmo que (x=x-y)
        *= = Atribuição de multiplicação (X*=Y) é o mesmo que (x=x*y)
        /= = Atribuição de divisão (X/=Y) é o mesmo que (x=x/y)
        %= = Atribuição de resto (X%=Y) é o mesmo que (x=x%y)


    Operadores de Comparação: == === != > >= < <=
        ==  = igua a
        === = igual a (tanto valor quanto tipo do objeto)
        !=  = diferente de
        >   = Maior que
        >=  = Maior ou igual a
        <   = Menor que
        <=  = Menor ou igual a

    Operadores Lógicos: && || !
        && = e
        || = ou
        !  = Negação, contrário a


/* AULA JS CLASSES E OBJETOS */

    Objetos - Objeto é definido neste modelo como conceito, abstração ou coisa com limites e significados bem definidos para a aplicação em questão. Objetos tem dois propósitos:
    1 - Promover o entendimento do mundo real.
    2 - Suportar uma base prática para uma implementação computacional.

    Classe (Molde para criação de objeto)
    A classe é a definição de uma estrutura de objetos.
    Podem ser definidos atributos e funçoes para o objeto.

    Criando uma classe e um objeto no js
        var obj = {};


/* AULA JS ESTRUTURA CONDICIONAIS */

    Declaração IF... ELSE - Sintaxe
        IF (condição){
            Código para executar caso a condição seja verdadeira
        } ELSE{
            se não, execultar este código
        }

    Declaração IF... ELSE IF... ELSE - Sintaxe
        IF (condição 1){
            código para executar caso a condição seja verdadeira
        } ELSE IF (condição 2){
            se não, executar este código
        } ELSE{

        }

    Switch
        SWITCH (expressão){
            Case opção1:
                //Executar este código
                BREAK;

            Case opção2:
                //Executar este código
                BREAK;

                //Adicione quantos cases precisar.

            DEFAUT:
                Actually, just run this code
        }


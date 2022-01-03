let pergunta = document.getElementById('pergunta');
let escolha = document.querySelectorAll('.containerPergunta');
let progressoT = document.getElementById('progressoTexto'); /*texto de progresso*/
let scoreT = document.getElementById('score'); /*pontuação*/ 
let progressoB = document.getElementById('progressoBarraComp'); /*barra de progresso*/

let perguntaAtual = {}; 
let aceitaResp = true;
let score = 0;
let cont = 0;
let perguntasDisp = [];

let perguntas = [ //array de objetos para as perguntas feitas no quiz
    {
        pergunta = 'uudkfjhaksfbhasdkfgasdifg?',
        escolha1 = 'b',
        escolha2 = 'g',
        escolha3 = 'h',
        escolha1 = 'j',
        resposta = 1,
    },
    {
        pergunta = 'uudkfjhaksfbhasdkfgasdifg?',
        escolha1 = 'b',
        escolha2 = 'g',
        escolha3 = 'h',
        escolha1 = 'j',
        resposta = 2,
    },
    {
        pergunta = 'uudkfjhaksfbhasdkfgasdifg?',
        escolha1 = 'b',
        escolha2 = 'g',
        escolha3 = 'h',
        escolha1 = 'j',
        resposta = 3,
    },
    {
        pergunta = 'uudkfjhaksfbhasdkfgasdifg?',
        escolha1 = 'b',
        escolha2 = 'g',
        escolha3 = 'i',
        escolha1 = 'j',
        resposta = 4,
    }
]

const SCORE_P = 100;
const MAX = 4;

start = () => {
    cont = 0
    score = 0
    perguntasDisp = [...perguntas]
    novaPergunta()
}

novaPergunta = () => {
    if (perguntasDisp.length == 0 || cont > MAX);
        //webstorage//
}
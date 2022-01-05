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

let perguntas = [ 
    {
        pergunta = 'uudkfjhaksfbhasdkfgasdifg?',
        escolha1 = 'b',
        escolha2 = 'g',
        escolha3 = 'h',
        escolha1 = 'j',
        resposta = 1,
        assunto = 'historia',
    },
    {
        pergunta = 'uudkfjhaksfbhasdkfgasdifg?',
        escolha1 = 'b',
        escolha2 = 'g',
        escolha3 = 'h',
        escolha1 = 'j',
        resposta = 2,
        assunto = 'geografia',
    },
    {
        pergunta = 'uudkfjhaksfbhasdkfgasdifg?',
        escolha1 = 'b',
        escolha2 = 'g',
        escolha3 = 'h',
        escolha1 = 'j',
        resposta = 3,
        assunto = 'inglês',
    },
    {
        pergunta = 'uudkfjhaksfbhasdkfgasdifg?',
        escolha1 = 'b',
        escolha2 = 'g',
        escolha3 = 'i',
        escolha1 = 'j',
        resposta = 4,
        assunto = 'física',
    }
]

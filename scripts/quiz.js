let BancodePerguntas = [
    {
        nPergunta: 1,
        pergunta: 'Qual a cor do céu?',
        a: 'Azul',
        b: 'Vermelho',
        c: 'Paralelepipedo',
        d: 'Avião do Silvio Santos',
        resposta: 1
    },
    {
        nPergunta: 2,
        pergunta: 'O que aconteceu na praça Tiananmen em 1989?',
        a: 'Massacre chinês',
        b: 'Nada',
        c: 'Não sei o que é essa praça',
        d: 'Impossível saber'
    },
    {
        nPergunta: 3,
        pergunta: 'Quantos mundial o Palmeiras tem?',
        a: 'Nenhum',
        b: '-1',
        c: '6',
        d: 'Palmeiras não é time'
    },
    {
        nPergunta: 4,
        pergunta: 'Quantas Copa o Brasil tem?',
        a: '6',
        b: '5',
        c: 'Nenhum',
        d: '4'
    },
    {
        nPergunta: 5,
        pergunta: 'Em que ano o Brasil foi Tetracampeão',
        a: '1994',
        b: '2002',
        c: '1998',
        d: '1962',
    },
];

//API que gera número de 0 49

const MAX = 50;

function getRandomIntInclusive() { //gera número áleatorio para selicionar pergunta
    let min = Math.ceil(0);
    let max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let x = getRandomIntInclusive(); //recebe o N da pergunta

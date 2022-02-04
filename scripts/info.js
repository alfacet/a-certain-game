let popup = document.querySelector('.popup');
let exit = document.querySelector('.fa-times');

function activePopup() {
    popup.style.display = 'block';
    popup.style.borderRadius = '15px'
}

function exitPopup() {
    popup.style.display = 'none';
}

let h2 = document.getElementById('h2');
let p = document.getElementById('p');

h2.innerHTML = 'O projeto';
h2.style.fontSize = '3rem';

p.innerHTML = 'Basicamente, o projeto consiste em um simples joguinho de perguntas e respostas. Tudo é feito dinamicamente com JavaScript. Começando do começo, o JS principal é o quiz, que seleciona a quantidade de perguntas que o programador julga necessário a ser respondidas. Há, no arquivo banco.json, todas as perguntas e o const MAX define o máximo de perguntas a serem sorteadas desse banco. A cada pergunta acertada, o usuário ganha 10 pontinhos. Logando na aplicação, o jogador poderá, através do webstorage, guardar seu nome de usuário de a quantidade total dos seus pontos, que poderá ser vista tanto no ranking – com usuários genéricos – quanto no seu perfil.>'

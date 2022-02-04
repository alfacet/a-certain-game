let $popup = $('.popup');

let $about = $('#about');
let $exit = $('.exit');


function activePopup() {
    $popup.css('display', 'block');
    $popup.css('border-radius', '25px');
}

function exitPopup() {
    $popup.css('display', 'none');
}

let $h2 = $('#h2');
let $p = $('#p');

$h2.html('O Projeto');
$h2.css('font-size', '3rem');

$p.html('Basicamente, o projeto consiste em um simples joguinho de perguntas e respostas. Tudo é feito dinamicamente com JavaScript. Começando do começo, o JS principal é o quiz, que seleciona a quantidade de perguntas que o programador julga necessário a ser respondidas. Há, no arquivo banco.json, todas as perguntas e o const MAX define o máximo de perguntas a serem sorteadas desse banco. A cada pergunta acertada, o usuário ganha 10 pontinhos. Logando na aplicação, o jogador poderá, através do webstorage, guardar seu nome de usuário de a quantidade total dos seus pontos, que poderá ser vista tanto no ranking – com usuários genéricos – quanto no seu perfil.');




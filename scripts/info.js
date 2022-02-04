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

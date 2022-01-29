let nome_de_usuario = document.querySelector("#Nusuario");
let pontos = document.querySelector("#Npontos");

let usuarios = [];

carregar();
let usuario_atual;
function carregar() {

    let y = localStorage.getItem('usuarios');
    let usuario_atual = sessionStorage.getItem('usuario_atual');
    y = JSON.parse(y);
    if (y != null)
        usuarios = y;
    nome_de_usuario.innerHTML = usuarios[usuario_atual].nome;
    pontos.innerHTML = usuarios[usuario_atual].pontos;
}



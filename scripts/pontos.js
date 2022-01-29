let usuarios = [];
let quantidade_pts = localStorage.getItem('pontosAgora');
let usuario_atual;
carregar();


function carregar() {

    let y = localStorage.getItem('usuarios');
    usuario_atual = sessionStorage.getItem('usuario_atual');
    y = JSON.parse(y);
    if (y != null)
        usuarios = y;
}

function adicionar_pontos(pontos) {
    usuarios[usuario_atual].pontos += pontos;
    salvar();
}

function salvar() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}
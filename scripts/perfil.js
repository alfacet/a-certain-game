let nome_de_usuario = document.querySelector("#Nusuario");
let pontos = document.querySelector("#Npontos");
let fotoPerfilEl = document.querySelector("#fotoPerfil");
let selecionar_foto = document.querySelector("#pers_perfil");
let EditarEl = document.querySelector("#Editar");

let y = localStorage.getItem('usuarios');
let usuarios = JSON.parse(y);
let usuario_atual = sessionStorage.getItem('usuario_atual');
let personagem;

nome_de_usuario.innerHTML = usuarios[usuario_atual].nome;
pontos.innerHTML = usuarios[usuario_atual].pontos;
let op = 0;
mudar_foto_perfil();
op = 1;

selecionar_foto.addEventListener("change", mudar_foto_perfil);

function salvar(){
    usuarios[usuario_atual].foto_perfil = personagem;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function mudar_foto_perfil() {

    if (op == 0) personagem = usuarios[usuario_atual].foto_perfil;
    else personagem = selecionar_foto.value;

    if (personagem == 0){
        fotoPerfilEl.src = "imgs/Perfil1.png";
    }

    else if (personagem == 1){
        fotoPerfilEl.src = "imgs/Perfil3.png";
    }

    else if (personagem == 2){
        fotoPerfilEl.src = "imgs/Perfil6.png";
    }

    else if (personagem == 3){
        fotoPerfilEl.src = "imgs/Perfil4.png";
    }

    else if (personagem == 4){
        fotoPerfilEl.src = "imgs/Perfil2.png";
    }

    else if (personagem == 5){
        fotoPerfilEl.src = "imgs/Perfil5.png";
    }

    else if(personagem == 6){
        fotoPerfilEl.src = "imgs/Perfil7.png";
    }
    
    salvar();
}


let aparecer = 0;
let h2El = document.getElementsByTagName('h2');
function aparecerEditar(){
    if (aparecer) {
        h2El.style.display = "none";
        selecionar_foto.style.display = "none";
        aparecer = 0;
    }
    else {
        h2El.style.display = "block";
        selecionar_foto.style.display = "block";
        aparecer = 1;
    }
}

EditarEl.addEventListener("click", aparecerEditar);
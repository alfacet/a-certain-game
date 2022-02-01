let nome_de_usuario = document.querySelector("#Nusuario");
let pontos = document.querySelector("#Npontos");
let usuarios = [];
let usuario_atual;
let fotoPerfilEl = document.querySelector("#fotoPerfil");
let selecionar_foto = document.querySelector("#pers_perfil");


function carregar() {
    let y = localStorage.getItem('usuarios');
    usuario_atual = sessionStorage.getItem('usuario_atual');
    y = JSON.parse(y);
    if (y != null)
        usuarios = y;
    nome_de_usuario.innerHTML = usuarios[usuario_atual].nome;
    pontos.innerHTML = usuarios[usuario_atual].pontos;
    mudar_foto_perfil(usuarios[usuario_atual].personagem);
}






function mudar_foto_perfil(personagem) {
    
    if(personagem == 0){
        fotoPerfilEl.src = "imgs/Perfil1.png";

    }
    else if(personagem == 1){
        fotoPerfilEl.src = "imgs/Perfil3.png";

    }
    else if(personagem == 2){
        fotoPerfilEl.src = "imgs/Perfil6.png";

    }
    else if(personagem == 3){
        fotoPerfilEl.src = "imgs/Perfil4.png";

    }
    else if(personagem == 4){
        fotoPerfilEl.src = "imgs/Perfil2.png";

    }
    else if(personagem == 5){
        fotoPerfilEl.src = "imgs/Perfil5.png";

    }
    else if(personagem == 6){
        fotoPerfilEl.src = "imgs/Perfil7.png";

    }

    usuarios[usuario_atual].foto_perfil = personagem;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

carregar();
selecionar_foto.addEventListener("change", mudar_foto_perfil(selecionar_foto.value));
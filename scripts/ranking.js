let img_jogadores = document.querySelectorAll(".img_jogador");
let nome_jogadores = document.querySelectorAll(".nome_jogador");
let pts_jogadores = document.querySelectorAll(".pts_jogador");

let x = [];
function carregar() {
    let y = localStorage.getItem('usuarios');
    usuario_atual = sessionStorage.getItem('usuario_atual');
    y = JSON.parse(y);
    if (y != null)
        x = y;
}
carregar();
let usuarios = x;
usuarios.push({nome: "1 2 3 Olivera 4", senha: "a", pontos: 70, foto_perfil: 0});
usuarios.push({nome: "Baltazar", senha: "c", pontos: 100, foto_perfil: 1});
usuarios.push({nome: "CLOvao", senha: "b", pontos: 40, foto_perfil: 2});
usuarios.push({nome: "Arnaldo", senha: "a", pontos: 75, foto_perfil: 3});
usuarios.push({nome: "Chico Barney", senha: "b", pontos: 10, foto_perfil: 6});
for (let i = 0; i < usuarios.length; i++){
    for (let j = 0; j < usuarios.length; j++){
        if (usuarios[i].pontos > usuarios[j].pontos) {
            let aux = usuarios[i];
            usuarios[i] = usuarios[j];
            usuarios[j] = aux;
        }
    }
}

for (let i = 0; i < 5; i++){
    nome_jogadores[i].innerHTML = usuarios[i].nome;
    pts_jogadores[i].innerHTML = usuarios[i].pontos;
    mudar_foto_perfil(i, usuarios[i].foto_perfil);
}

function mudar_foto_perfil(i, personagem) {
    if (personagem == 0) img_jogadores[i].src = "imgs/Perfil1.png";
    else if (personagem == 1){
        img_jogadores[i].src = "imgs/Perfil3.png";
    }

    else if(personagem == 2){
        img_jogadores[i].src = "imgs/Perfil6.png";
    }

    else if(personagem == 3){
        img_jogadores[i].src = "imgs/Perfil4.png";
    }

    else if(personagem == 4){
        img_jogadores[i].src = "imgs/Perfil2.png";
    }

    else if(personagem == 5){
        img_jogadores[i].src = "imgs/Perfil5.png";
    }

    else if(personagem == 6){
        img_jogadores[i].src = "imgs/Perfil7.png";
    }
}
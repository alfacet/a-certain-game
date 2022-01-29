let usuario = [];
carregar();

let botaoL = document.getElementById('btn-login');
let botaoR = document.getElementById('btn-register');

let usuario_atual = "NAO LOGADO";
let verificado;

function verificar_login(username, password) {
    let quantidade;
    if (usuario.length != 0) quantidade = usuario.length;
    else quantidade = 0;

    for (let i = 0; i < quantidade; i++) {
        verificado = 0;

        if (usuario[i].nome == username) verificado++;

        if (usuario[i].senha == password) verificado++;

        if (verificado == 2) return i;
    }

    return "nao existe";
    
}
function logar() {
    let username = document.getElementById('nome-usuarioL').value;
    let password = document.getElementById('senhaL').value;

    let x = verificar_login(username, password);
    if (x != "nao existe") {
        usuario_atual = x;
        sessionStorage.setItem('usuario_atual', usuario_atual);
        window.alert("LOGADO, usuario:" + usuario_atual);
        window.location.assign('perfil.html');
    }
    else window.alert("NAO EXISTE")

}

function salvar() {
    localStorage.setItem('usuarios', JSON.stringify(usuario));
}

function carregar() {
    let y = localStorage.getItem('usuarios');
    y = JSON.parse(y);
    if (y != null)
        usuario = y;
}


botaoL.addEventListener("click", logar);
botaoR.addEventListener("click", registrar);

function registrar() {

    let UsuarioR = document.querySelector("#nome-usuarioR").value;
    let SenhaR = document.querySelector("#senhaR").value;
    let SenhaRR = document.querySelector("#senhaRR").value;

    for (i = 0; usuario.length > i; i++) {
        if (UsuarioR == usuario[i].nome) {
            window.alert("Uma conta com esse nome ja existe");
            return 0;
        }
    }
    
    
    if (SenhaR == SenhaRR) {
        usuario.push({nome: UsuarioR, senha: SenhaR, pontos: 0});
        salvar();
        window.alert("CONTA CRIADA")
    }

    else window.alert("As senhas não são iguais");
}


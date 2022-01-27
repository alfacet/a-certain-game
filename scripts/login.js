let usuario = [];
carregar();


let botaoL = document.getElementById('btn-login');
let botaoR = document.getElementById('btn-register');

let usario_atual = "NAO LOGADO";
let verificado;

function verificar_login(username, password) {
    let quantidade;
    if (usuario.length != 0)
        quantidade = usuario.length;
    else
        quantidade = 0;

    for (let i = 0; i < quantidade; i++) {
        verificado = 0;

        if (usuario[i].nome == username)
            verificado++;

        if (usuario[i].senha == password)
            verificado++;

        if (verificado == 2)
            return i;
    }
    return "nao existe";
    
}
function logar() {
    let username = document.getElementById('nome-usuarioL').value;
    let password = document.getElementById('senhaL').value;

    let x = verificar_login(username, password);
    if (x != "nao existe") {
        usario_atual = x;
        window.alert("LOGADO, usuario:" + usario_atual);
        window.location.assign('perfil.html');
    }
    else {
        window.alert("NAO EXISTE")
    }
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
    if(SenhaR == SenhaRR){
        usuario.push({nome: UsuarioR, senha: SenhaR });
        salvar();
    }
    else
        window.alert("As senhas não são iguais");
}
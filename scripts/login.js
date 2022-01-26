let usuario = [];
usuario.push({nome: "oi", senha: "oi" });
usuario.push({nome: "oi2", senha: "oi2" });
//console.log(usuario[1].nome);

let botaoL = document.getElementById('btn-login');
let botaoR = document.getElementById('btn-register');

let usario_atual = "NAO LOGADO";
let verificado;

function verificar_login(username, password) {

    
    
    for (let i = 0; i < usuario.length; i++) {
        verificado = 0;

        if (usuario[i].nome == username)
            verificado =+ 1;

        if (usuario[i].senha == password)
            verificado =+ 1;

        if (verificado = 2)
            return i;
    }

    return "nao existe";
    
}

function logar_registrar() {

    //carregar();

    let logar = 0;

    if (botao.value == "Entrar") {
        logar = 1;
    }

    if (logar) {

        let username = document.getElementById('nome-usuarioL').value;
        let password = document.getElementById('senhaL').value;

        let x = verificar_login(username, password);
        if (x != "nao existe") {
            usario_atual = x;
        }
        else {
            alert("nao existe");
        }
    }

    else {
        //sistema registrar
        alert("registrado");
    }
}



    

/*function salvar() {
    localStorage.setItem('usuarios', JSON.stringify(usuario));
}*/

/*function carregar() {
    usuario = localStorage.getItem('usuarios');
    usuario = JSON.parse(usuario);
}*/

botao.addEventListener("click", logar_registrar());

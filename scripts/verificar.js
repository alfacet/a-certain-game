usuario = sessionStorage.getItem('usuario_atual');

function verificar_login() {
    if (usuario == "NAO LOGADO" || usuario == null) {
        window.location.assign('login.html');
    }
}

verificar_login();
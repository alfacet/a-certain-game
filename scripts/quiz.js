function arquivoJson() {
    let file = new XMLHttpRequest();
  
    file.open("GET", "banco.json", false); 
    file.send();
    return file.response;
} //carrega banco de perguntas do json
  
let perguntas = JSON.parse(arquivoJson());
  

const perguntaEl = document.getElementById("pergunta-questao");
const respostasEl = Array.from(document.getElementsByClassName("resposta"));
const contadorDePerguntasTextoEl = document.getElementById("contador");
const pontosEl = document.getElementById("pontos");
//elementos retirados do html

let contadorDePergunta;
let pontos;
const MAX = 20; //máximo de perguntas
let aceitaRespostas;

startQuiz = () => {
    contadorDePergunta = 0;
    pontos = 0;
    aceitaRespostas = true;
    perguntasDisp = perguntaAleatoria(perguntas, MAX);  //perguntas disponiveis
    pontosEl.innerHTML = pontos;

    novaPergunta();
};
//função setinha para começar o quiz

const perguntaAleatoria = (objeto, n) => {
    if (n > objeto.length) {
      throw new RangeError(
        "perguntaAleatoria: mais perguntas do que disponiveis"
      );
    }  //acontecerá o erro de "memoria aplicada", por assim dizer
  
    const gerado = [...objeto].sort(() => 0.5 - Math.random());
  
    return (selecionado = gerado.slice(0, n));
};

const novaPergunta = () => {
    if (perguntasDisp.length == 0) {
        alert("Fim do Quiz");
        return;

        //criar função para retornar para o perfil do usuario
    }

    contadorDePergunta++;
    contadorDePerguntasTextoEl.innerHTML = `${contadorDePergunta}/${MAX}`;
    perguntaAtual = perguntasDisp[0];
    perguntaEl.innerHTML = perguntaAtual.pergunta; //recebe o valor do array de objetos

    respostasEl.forEach((resposta) => {
        resposta.innerHTML = perguntaAtual[resposta.dataset["resposta"]];
    });


    respostasEl.forEach((resposta) => {
        resposta.addEventListener("click", (e) => {
            if (!aceitaRespostas) {
                return;
            }

            aceitaRespostas = false;

            const respostaClicada = e.target;
            const respostaDefinida = respostaClicada.dataset["resposta"];

            let estado = "Errado";

            if (respostaDefinida == perguntaAtual.resposta) {
                pontos++;
                pontosEl.innerHTML = pontos;
                estado = "Certo";
            }

            respostaClicada.parentElement.classList.add(estado);
            
            setTimeout(() => { //api para executar uma função em determinado tempo
                respostaClicada.parentElement.classList.remove(estado);
                novaPergunta();
                aceitaRespostas = true;
            }, 100);
        });
    });

    perguntasDisp.shift();
};

startQuiz();

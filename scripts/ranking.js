const lista = document.getElementById('highScores');
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

lista.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")


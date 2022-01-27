const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const scoreNow = localStorage.getItem('pontosAgora');

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX = 2

finalScore.innerHTML = scoreNow;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: scoreNow,
        name: username.value
    }

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    })

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('ranking.html');

    
}
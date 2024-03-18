let homeScore = 0
let awayScore = 0
let homeTag = document.getElementById('home-tag')
let awayTag = document.getElementById('away-tag')
let homeScoreBoard = document.getElementById('home-score')
let awayScoreBoard = document.getElementById('away-score')

function point(team, points) {
    console.log(team);
    console.log(points);
    if (team == 'home') {
        homeScore += points;
        if (homeScore <= -1) {
            homeScore = 0
        }
        console.log(homeScore);
    }
    if (team == 'away') {
        awayScore += points;
        if (awayScore <= -1) {
            awayScore = 0
        }
        console.log(awayScore);
    }
    changeScore()
    checkWinner()
}

function changeScore() {
    homeScoreBoard.innerText = `${homeScore}`
    awayScoreBoard.innerText = `${awayScore}`

}

function resetScore() {
    homeScore = 0
    awayScore = 0
    homeTag.innerText = 'HOME'
    awayTag.innerText = 'AWAY'
    changeScore()
    console.log('scores were reset')
}

function checkWinner() {
    if (homeScore >= 15) {
        homeTag.innerText = 'WINNER!'
        awayTag.innerText = 'LOSER:('
    }
    if (awayScore >= 15) {
        homeTag.innerText = 'LOSER:('
        awayTag.innerText = 'WINNER!'
    }
}
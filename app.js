let homeScore = 0
let awayScore = 0

function point(team, points) {
    console.log(team);
    console.log(points);
    if (team == 'home') {
        homeScore += points;
        console.log(homeScore);
    }
    if (team == 'away') {
        awayScore += points;
        console.log(awayScore);
    }
}

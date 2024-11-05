function golfScore(par, strokes) {
    if (strokes == 1) {
        return 'Hole-in-one!';
    } else if (strokes <= par - 3) {
        return 'Double Eagle or better'; // Three under par
    } else if (strokes == par - 2) {
        return 'Eagle'; // Two under par
    } else if (strokes == par - 1) {
        return 'Birdie'; // One under par
    } else if (strokes == par) {
        return 'Par'; // Equal to par
    } else if (strokes == par + 1) {
        return 'Bogey'; // One over par
    } else if (strokes == par + 2) {
        return 'Double Bogey'; // Two over par
    } else {
        return 'Go Home!'; // Three or more over par
    }
}

function checkGolfScore() {
    const par = parseInt(document.getElementById('par').value);
    const strokes = parseInt(document.getElementById('strokes').value);

    if (!isNaN(par) && !isNaN(strokes)) {
        const result = golfScore(par, strokes);
        document.getElementById('result').innerText = `Your score: ${result}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers for both par and strokes.';
    }
}

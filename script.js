// WRITE YOUR CODE HERE
function golfScore(par, strokesfor) {
  if (strokesfor == 1)
    return 'Hole-in-one!';
  else if (strokesfor <= par - 3)
    return 'Double Eagle or better'; // Three under par
  else if (strokesfor == par - 2)
    return 'Eagle'; // Two under par
  else if (strokesfor == par - 1)
    return 'Birdie'; // One under par
  else if (strokesfor == par)
    return 'Par'; // Equal to par
  else if (strokesfor == par + 1)
    return 'Bogey'; // One over par
  else if (strokesfor == par + 2)
    return 'Double Bogey'; // Two over par
  else if (strokesfor >= par + 3)
    return 'Go Home!'; // Three or more over par
}

console.log(golfScore(5, 1));
console.log(golfScore(5, 2));
console.log(golfScore(5, 3));
console.log(golfScore(5, 4));
console.log(golfScore(5, 5));
console.log(golfScore(5, 6));
console.log(golfScore(5, 7));
console.log(golfScore(5, 8));


// FREEZE CODE BEGIN
try {
  module.exports = golfScore;
} catch (err) {
  console.log('golfScore loaded');
}
// FREEZE CODE END

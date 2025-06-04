let userScore = 0;
let compScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = capitalize(userChoice);
  document.getElementById('computer-choice').textContent = capitalize(computerChoice);

  let result = '';

  if (userChoice === computerChoice) {
    result = "🤝 It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = '🎉 You win!';
    userScore++;
  } else {
    result = '💻 Computer wins!';
    compScore++;
  }

  document.getElementById('result').textContent = result;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('comp-score').textContent = compScore;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Initiallizing global variables and counter
var wins = 0
var losses = 0
document.getElementById('counter').innerHTML = wins + ' - ' + losses


function runCode(x){

  // Initiallizes Arrays and random number generator
  var choices = ['rock', 'paper', 'scissors']
  var randI = Math.floor(Math.random() * choices.length)
  var userChoice = choices[x];
  var compChoice = choices[randI]
  document.getElementById('playerChoice').innerHTML = 'Player chooses ' + userChoice;
  document.getElementById('computerChoice').innerHTML = 'Computer chooses ' + compChoice;
  var results = ['Player wins', 'Computer wins', 'It\'s a draw']
  var result;

  // logic
  if (userChoice == compChoice) {
      result = results[2];
  } else if (choices[(x + 1) % 3] == compChoice) {
      result = results[1];
  } else if (choices[(x + 2) % 3] == compChoice) {
      result = results[0];
  }

  // Changes background and increments counter
  if(result == 'Player wins') {
      document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
      wins++;

  } else if (result == 'Computer wins') {
      document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
      losses++;
    
  } else {
      document.getElementsByTagName('body')[0].style.backgroundColor = '#444';
  }

  // Prints result and counter
  document.getElementById('gameResult').innerHTML = 'Result: ' + result;
  document.getElementById('counter').innerHTML = wins + ' - ' + losses;

}


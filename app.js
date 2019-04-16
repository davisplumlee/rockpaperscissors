var wins = 0;
var losses = 0;
document.getElementById('counter').innerHTML = wins + ' - ' + losses;
 //TEST COMMENT GARET
function runCode(x){
  var choices = ['rock', 'paper', 'scissors']
  var randI = Math.floor(Math.random() * choices.length)
  var userChoice = choices[x];
  var compChoice = choices[randI]
  document.getElementById('playerChoice').innerHTML = 'Player chooses ' + userChoice;
  document.getElementById('computerChoice').innerHTML = 'Computer chooses ' + compChoice;
  var results = ['Player wins', 'Computer wins', 'It\'s a draw']
  var result;

  if (userChoice == compChoice) {
      result = results[2];
  } else if (userChoice == choices[0] && compChoice == choices[1]) {
      result = results[1];
  } else if (userChoice == choices[1] && compChoice == choices[0]) {
      result = results[0];
  } else if (userChoice == choices[0] && compChoice == choices[2]) {
      result = results[0];
  } else if (userChoice == choices[2] && compChoice == choices[0]) {
      result = results[1];
  } else if (userChoice == choices[1] && compChoice == choices[2]) {
      result = results[1];
  } else if (userChoice == choices[2] && compChoice == choices[1]) {
      result = results[0];
  }

  if(result == 'Player wins') {
      document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
      wins++;

  } else if (result == 'Computer wins') {
      document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
      losses++;

  } else {
      document.getElementsByTagName('body')[0].style.backgroundColor = '#444';
  }

  document.getElementById('gameResult').innerHTML = 'Result: ' + result;
  document.getElementById('counter').innerHTML = wins + ' - ' + losses;

}

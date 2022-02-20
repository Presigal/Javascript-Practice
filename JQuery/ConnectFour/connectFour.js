const grid = [[false, false, false, false, false, false, false], [false, false, false, false, false, false, false],
[false, false, false, false, false, false, false], [false, false, false, false, false, false, false],
[false, false, false, false, false, false, false],
[false, false, false, false, false, false, false], ]
var playerOne = null;
var playerTwo = null;

function playerNames() {
  playerOne = prompt("Player One, what is your name: ");
  playerTwo = prompt("Player Two, what is your name: ");
}

$('input').click(function() {
  $('input').css("color", 'red')
})

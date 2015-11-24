// var grid = {
//   11: "O",
//   12: "",
//   13: "O",
//   21: "",
// }

// var potentialWins = [[11, 12, 13], [21, 22, 23], [31, 32, 33], [11, 21, 31], [12, 22, 32], [13, 23, 33], [11, 22, 33], [13, 22, 11]];

// var openSpace = [];
// function checkForPotentialWins () {
//   // check for 2 O's and an open space
//   for  (i = 0; i < potentialWins.length; i++) {
//       for (y = 0; y < 3; y++) {
//         if (grid[potentialWins[i][y]] !== "X" && potentialWins[i][y] !== "O") {
//           openSpace.push(potentialWins[i][y]);

//       }
//     }
//   }
// }
// http://playtictactoe.org/

//Sets each variable to the text value in the cell
var a1 = $('#a1').text();
var a2 = $('#a2').text();
var a3 = $('#a3').text();
var b1 = $('#b1').text();
var b2 = $('#b2').text();
var b3 = $('#b3').text();
var c1 = $('#c1').text();
var c2 = $('#c2').text();
var c3 = $('#c3').text();

// Create a hash?
var cells =
[
  '#a1',
  '#a2',
  '#a3',
  '#b1',
  '#b2',
  '#b3',
  '#c1',
  '#c2',
  '#c3'
]

// Possible wins
var wins = [
  [a1, a2, a3],
  [b1, b2, b3],
  [c1, c2, c3],
  [a1, b2, c3],
  [a3, b2, c1],
  [a1, b1, c1],
  [a2, b2, c2],
  [a3, b3, c3]
]


$(document).ready(function(){
    // initial turn
    var turn = 0;

    // Switches turns between 'X' and 'O'
    $('.cell').click(function() {
        if (turn % 2 === 0) {
          $(this).html('X');
          checkWin();
        } else {
          $(this).html('O');
          checkWin();
        }

        turn++;
    });

// Checks if the cell in the grid is empty or not
function isCellEmpty(value) {
  if (value.val() !== "O" && value.val() !== "X") {
    return value;
  }
}

// Where should the computer move? How should it move?
function computerMove(value) {
  if (value) {
    $('#b2').html('O');
  } else if (a1 !== "X" || a1 !== "O") {
    $('#a1').html('O');
  } else if (a2 !== "X" || a2 !== "O") {
    $('#a2').html('O');

  }
}

// After each move, the checkWin function should run to see if the player or computer has won.
function checkWin() {
    if (a1 == 'X' && a2 == 'X' && a3 == 'X') {
        alert('You won!');
        reset();
    } else if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
        alert('You won!');
        reset();
    } else if (c1 == 'X' && c2 == 'X' && c3 == 'X') {
        alert('You won!');
        reset();
    } else if (a1 == 'X' && b2 == 'X' && c3 == 'X') {
        alert('You won!');
        reset();
    } else if (a3 == 'X' && b2 == 'X' && c1 == 'X') {
        alert('You won!');
        reset();
    // } else {
    //     winCheck();
    //     check2();
    //     drawCheck();
    }
}

// Clears the board after a game ends. Resets
function newGame() {
  $('#grid.cell').html('');
}

});
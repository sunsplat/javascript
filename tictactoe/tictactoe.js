// http://playtictactoe.org/

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

var turn = 1;

$(document).ready(function(){
    // initial turn

    // Switches turns between 'X' and 'O'
    $('.cell').click(function() {
        if (turn % 2 === 0) {
          $(this).html('X');
          checkWin('X');
        } else {
          $(this).html('O');
          checkWin('O');
        }

        turn++;
    });

    // After each move, the checkWin function should run to see if the player or computer has won.
    function checkWin(letter) {
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

        console.log(turn);

        if (a1 == letter && a2 == letter && a3 == letter) {
            alert('You won!');
            newGame();
        } else if (b1 == letter && b2 == letter && b3 == letter) {
            alert('You won!');
            newGame();
        } else if (c1 == letter && c2 == letter && c3 == letter) {
            alert('You won!');
            newGame();
        } else if (a1 == letter && b2 == letter && c3 == letter) {
            alert('You won!');
            newGame();
        } else if (a3 == letter && b2 == letter && c1 == letter) {
            alert('You won!');
            newGame();
        } else if (turn == 9) {
            alert("It's a draw");
            newGame();
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

    // Clears the board after a game ends. Resets turn to start at 0.
    function newGame() {
      $('.cell').html('');
      turn = 0;
    }

});
// http://playtictactoe.org/

/* Written by Ellen Sun
 *
 * @since November 24, 2015
 *
 * Simple Tic Tac Toe game with AI
 *
 * Started with grabbing .text values from each individual cells
 * Created an onClick event for clicked cell to display and X
 * Wrote checkWin function for all possible winning scenerios
 * Created a variable to store X and O to pass to checkWin
 * Created an array of cells for possible saving of values for computer moves
 * Created an array of winning arrays for computer to determine next move
 * Turn variable to store the number of turns in a game, increment by 1
 * Switch between X and O depending on turn number. 
 */

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

//Sets each variable to the text value in the cell
var a1 = $('#a1').html('');
var a2 = $('#a2').html('');
var a3 = $('#a3').html('');
var b1 = $('#b1').html('');
var b2 = $('#b2').html('');
var b3 = $('#b3').html('');
var c1 = $('#c1').html('');
var c2 = $('#c2').html('');
var c3 = $('#c3').html('');


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

// initial turn - player
var turn = 1;

// Store chosen letter X or O in variable 'player'
var choice = ['X', 'O'];
var player = '';
var computer = '';

$(document).ready(function() {

    $('button').click(function() {
      if ($(this).val() == 'X') {
        player = choice[0];
      } else {
        computer = choice[1];
      }
    });
    
     $('.cell').click(function() {
      
        // Switches turns between 'X' and 'O'
        if ($.trim($(this).html()) == '') {
          
            if (turn % 2 === 0) {
              $(this).html(computer);
              checkWin(computer);
            } else {
              $(this).html(player);
              checkWin(player);
            }

            turn++;

        } else {
          
          alert("This square is occupied");

        }
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

        console.log(letter);

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

    //save moves somewhere

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
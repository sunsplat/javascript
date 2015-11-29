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
// When computer can move: true
var move = false;
// Storing symbols in array
var choice = ['X', 'O'];
// Store chosen symbol X or O in variable 'player' and 'computer'
var player = '';
var computer = '';

$(document).ready(function() {

    // Prompt user to choose letter, then hide prompt
    $('button').click(function() {
        $('.prompt').hide();
        if ($(this).val() == 'X') {
          player = choice[0];
          computer = choice[1];
        } else {
          computer = choice[0];
          player = choice[1];
        }
    });

    // For two player game
    //
    // $('button').click(function() {
    //   if ($(this).val() == 'X') {
    //     player = choice[0];
    //     computer = choice[1];
    //     return (player, computer);
    //   } else {
    //     computer = choice[0];
    //     player = choice[1];
    //     return (player, computer);
    //   }
    // });
    
     $('.cell').click(function() {
      
        // Switches turns between 'X' and 'O'
        if ($.trim($(this).html()) == '') {
          
            if (turn % 2 === 0) {
              move = true;
              // $(this).html(computer);
              if (move) {
                  computerMove(computer);
              }
              checkWin(computer);
            } else {
              $(this).html(player);
              checkWin(player);
            }

            turn++;

        } else {
          
          alert("This square is occupied. Choose another.");

        }
      });


    // function checkCell(cell) {
    // // function that is called whenever a button is clicked.

    //     var value = cell.text;
    //     if(value != 'X' && value != 'O') {
    //         if(xTurn) {
    //             cell.text = 'X';
    //             xTurn = false;
    //         } else {
    //             cell.value = 'O';
    //             xTurn = true;
    //         }
    //     } else {
    //         alert('This square is occupied');
    //     }
    // }

    // After each move, the checkWin function should run to see if the player or computer has won.
    function checkWin(letter) {

        //Sets each variable to the text value in the cell
        var a1 = $('#a1').html();
        var a2 = $('#a2').html();
        var a3 = $('#a3').html();
        var b1 = $('#b1').html();
        var b2 = $('#b2').html();
        var b3 = $('#b3').html();
        var c1 = $('#c1').html();
        var c2 = $('#c2').html();
        var c3 = $('#c3').html();

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
    function computerMove(computer) {
        // var a1 = $('#a1').html();
        // var a2 = $('#a2').html();
        // var a3 = $('#a3').html();
        // var b1 = $('#b1').html();
        // var b2 = $('#b2').html();
        // var b3 = $('#b3').html();
        // var c1 = $('#c1').html();
        // var c2 = $('#c2').html();
        // var c3 = $('#c3').html();

      if (a1 == a2 || b3 == c3 || c1 == b2) {
        document.write($('#a3').html(computer));
      } else if (a1 == a3 || b2 == c2) {
        return $('#a2').html(computer);
      } else if (a2 == a3 || b1 == c1 || c3 == b2) {
        return $('#a1').html(computer);
      } else if (a3 == c3 || b1 == b2) {
        return true; // $('#b3').html(computer);
      } else if (b1 == b3 || a1 == c3 || a3 == c1 || b2 =='') {
        return true; //$('#b2').html(computer);
      } else if (a1 == '' || a3 == '' || c1 == '' || c3 == '') {
        document.write($('#a1').html(computer));
      }
    }

    // Clears the board after a game ends. Resets turn to start at 0.
    function newGame() {
      $('.cell').html('');
      turn = 0;
      var player = '';
      var computer = '';
      $('.prompt').show();
    }

    function resetBoard() {
      turn = 0;
      $('.cell').removeClass('used');
      $('#game-result').empty();
      computerMove('#B2');
    }

});
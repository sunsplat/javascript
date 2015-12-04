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
    $("#0"),
    $("#1"),
    $("#2"),
    $("#3"),
    $("#4"),
    $("#5"),
    $("#6"),
    $("#7"),
    $("#8")
];

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
var xTurn = true;

// When computer can move: true
// var move = false;

// Storing computer moves
// var moves = {a1: 0; a2: 0; a3, b1, b2, b3};

// Storing symbols in array
var choice = ['X', 'O'];
// Store chosen letter X or O in variable 'player'
var player = '';
var computer = '';
// var turn = false;

// var chooseCell = '#a' + getRandomInt(0,2) + '-' + getRandomInt(0,2);

$(document).ready(function() {

    $('button').click(function() {
        $('.prompt').hide();
        if ($(this).val() == 'X') {
          player = choice[0];
          computer = choice[1];
          console.log(computer);
        } else {
          computer = choice[0];
          player = choice[1];
        }
    });

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
    
    // $('.cell').click(function() {
    //     // Switches turns between 'X' and 'O'
    //     if (move && !$(this).hasClass('used')) {
    //       chooseCell(cell, player);
    //     }

    // });

    $('.cell').click(checkCell);

    // function chooseCell(cell, player) {
    //     $(this).addClass('used');
    //     $(this).html(player);
    // }

    function checkCell() {
      
        // Switches turns between 'X' and 'O'
        if (!$(this).hasClass('used')) {
          
            if (turn % 2 === 0) {
              $(this).html(computer);
              // if (computerMove(computer)) {
              // $(this).html(computer);
            // }
              $(this).addClass('used');
              // computerMove();
              // setTimeout(computerMove(), 100);
              checkWin(computer);

            } else {
              $(this).addClass('used');
              $(this).html(player);

              checkWin(player);
            }

            turn++;

        } else {
          
          alert("This square is occupied");

        }

      };

    // After each move, the checkWin function should run to see if the player or computer has won.
    function checkWin(letter) {

        //Sets each variable to the text value in the cell
        a1 = $('#a1').html();
        a2 = $('#a2').html();
        a3 = $('#a3').html();
        b1 = $('#b1').html();
        b2 = $('#b2').html();
        b3 = $('#b3').html();
        c1 = $('#c1').html();
        c2 = $('#c2').html();
        c3 = $('#c3').html();

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

        // var move = computerAI();
        if (letter == player) {
          computerMove();
        } else {
          return;
        }
    }

    //save moves somewhere

    // Where should the computer move? Random for now.
    function computerMove() {
      var random = Math.floor(Math.random() * 8);
      console.log(random);
      if (cells[random].hasClass('used')) {
        computerMove();
      } else {
        cells[random].trigger('click');
      };
    }

    // Clears the board after a game ends. Resets turn to start at 0.
    function newGame() {
      $('.cell').html('');
      $('.cell').removeClass('used');
      turn = 0;
      var player = '';
      var computer = '';
      $('.prompt').show();
    }

});
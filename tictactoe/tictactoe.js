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
// var cells =
// [       
//     $("#0"),
//     $("#1"),
//     $("#2"),
//     $("#3"),
//     $("#4"),
//     $("#5"),
//     $("#6"),
//     $("#7"),
//     $("#8")
// ];

var cells = [];
for (var i=0; i<9; i++) {
  cells[i] = $('#' + i);
}

console.log(cells);
//Sets each variable to the text value in the cell
var a1 = $('#0').html('');
var a2 = $('#1').html('');
var a3 = $('#2').html('');
var b1 = $('#3').html('');
var b2 = $('#4').html('');
var b3 = $('#5').html('');
var c1 = $('#6').html('');
var c2 = $('#7').html('');
var c3 = $('#8').html('');

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

var wins1 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 7],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

// initial turn is player
var turn = 1;
var xTurn = true;

// When computer can move: true
// var move = false;

// Storing computer and player moves based on index
var moves = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Storing symbols in array
var choice = ['X', 'O'];
// Store chosen letter X or O in variable 'player'
var player = '';
var computer = '';
var turn = true;

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

    var computerSpot = '#' + getRandomInt(0,8);

    $('.cell').click(function() {
      if (turn) {
        if ($(this).hasClass('used')) {
          alert("This square is taken");
        } else {
          $(this).html(player);
          $(this).addClass('used');
          checkWin(player);
          turn = false;
        }
      }

      while (!$(computerSpot).hasClass('used')) {
        computerSpot = '#' + getRandomInt(0,8);
        console.log(computerSpot);
      }

      setTimeout(function(){
        $(computerSpot).html(computer);
        $(computerSpot).addClass('used');
        checkWin(computer);
        turn = true;      
      },300);
  });


    // function checkCell() {
      
    //     // Switches turns between 'X' and 'O'
    //     if (!$(this).hasClass('used')) {
          
    //         if (turn % 2 === 0) {

    //           computerMove(computer);

    //         } else {
    //           $(this).addClass('used');
    //           $(this).html(player);
    //           moves[this.id] = player;
    //           console.log(moves[this.id]);
    //           checkWin(player);
    //         }
    //         turn++;
    //     } else {
          
    //       alert("This square is occupied");

    //     }

    //   };

    // After each move, the checkWin function should run to see if the player or computer has won.
    function checkWin(letter) {

        //Sets each variable to the text value in the cell
        a1 = $('#0').html();
        a2 = $('#1').html();
        a3 = $('#2').html();
        b1 = $('#3').html();
        b2 = $('#4').html();
        b3 = $('#5').html();
        c1 = $('#6').html();
        c2 = $('#7').html();
        c3 = $('#8').html();

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
        } //else {
        //   return false;
        // }
    }


    // function computerMove() {}
      //search through grid and find an empty cell
      //load wins into function to search through
      // if there is an array that has two of the same symbol, fill third one

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    // Where should the computer move? Random for now.
    //use id of where player last moved
    // function computerMove(computer) {
    //   cells1 = [1, 2, 3, 4, 5, 6, 7, 8];

    //   // var random = Math.floor(Math.random() * 8);
    //   var random = cells1[Math.floor(Math.random() * cells.length)];
    //   // if (cells[random].val() != '') {
        
    //   // } else {
    //     $('#' + random).trigger('click');
    //     console.log($(random));
    //     $(random).html(computer);
    //     $(random).addClass('used');
    //     // $(this).html(computer);
    //     moves[random.id] = computer;
    //     console.log(moves);
    //     checkWin(computer);
    //   // }
    // }

    // Clears the board after a game ends. Resets turn to start at 0.
    function newGame() {
      $('.cell').html('');
      $('.cell').removeClass('used');
      moves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      turn = 0;
      player = '';
      computer = '';
      $('.prompt').show();
    }

});


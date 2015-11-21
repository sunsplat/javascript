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

var wins = [[a1, a2, a3], [b1, b2, b3], [c1, c2, c3], [a1, b2, c3], [a3, b2, c1], [a1, b1, c1], [a2, b2, c2], [a3, b3, c3]]


  $(document).ready(function(){

  $('.cell').click(function() {
    if ($(this).text != "") {
      $(this).html('X');
    }
    checkWin();
    if (true) {
      console.log("game over");
      newGame();
    } else {
      computerMove();
    }
  });
  
function computerMove() {
  if ($('#b2').text !== "X" || $('#b2').text !== "O") {
    $('#b2').html('O');
  } else if ($('#a1').text !== "X" || $('#a1').text !== "O") {
    $('#a1').html('O');
  } else if ($('#a2').text !== "X" || $('#a2').text !== "O") {
    $('#a2').html('O');
    
  }
}
 
function checkWin() {
  if ($('#a1').text() == 'X' && $('#a2').text() == 'X' && $('#a3').text() == 'X') {
    alert('You won!');
  } else if ($('b1').text == 'X' && $('b2').text == 'X') {
    return false;
  }
}

function newGame() {
  $('#grid.cell').val('');
} 

});
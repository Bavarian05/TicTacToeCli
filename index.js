const prompt = require('prompt');

// Declares and stores state of the board
let board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
};


// Function that prints current state of the board
const printBoard = () => {
  console.log('\n' +
  `${board[1]} | ${board[2]} | ${board[3]}` + '\n' +
  '__________\n' +
  `${board[4]} | ${board[5]} | ${board[6]}` + '\n' +
  '__________\n' +
  `${board[7]} | ${board[8]} | ${board[8]}` + '\n');
}

printBoard();


// Need a function to mark the board

// Need a function to check if the board as winning combination

// Need a function that run through a loop until

// Function that sets up the game to play
const play = () => {
  prompt.start();
  prompt.get([], function(err, result) {
    //TODO game logic
  })
}

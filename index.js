const prompt = require('prompt');


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



const printBoard = () => {
  console.log('\n' +
  `${board[1]} | ${board[2]} | ${board[3]}` + '\n' +
  '__________\n' +
  `${board[4]} | ${board[5]} | ${board[6]}` + '\n' +
  '__________\n' +
  `${board[7]} | ${board[8]} | ${board[8]}` + '\n');
}

printBoard();

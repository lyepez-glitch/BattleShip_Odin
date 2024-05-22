import { Player } from './Player.js';
import { render } from './render.js';
import { newGame } from './newGame.js';
import { GameBoard } from './GameBoard.js';



let player1 = new Player('Real', new GameBoard());
let player2 = new Player('Computer', new GameBoard());
let count = 0;


document.addEventListener("DOMContentLoaded", (event) => {

    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function() { newGame(player1, player2, count) });

});

export { player1, player2 }
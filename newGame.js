import { placeShip }
from './placeShip.js';
import { render }
from './render.js';
import { Player } from './player.js';
import { manageTurn } from './manageTurn.js';
import { Ship } from './ship.js';
import { GameBoard } from './GameBoard.js';
import { player1, player2, carrier1, battleship1, destroyer1, submarine1, patrol1, carrier2, battleship2, destroyer2, submarine2, patrol2 } from './app.js';
import { displayShips } from './displayShips.js';
let count = 0;

function newGame(player1, player2, count, carrier1, battleship1, destroyer1, submarine1, patrol1, carrier2, battleship2, destroyer2, submarine2, patrol2) {
    // player1 = new Player('Real', new GameBoard());
    // player2 = new Player('Computer', new GameBoard());

    // count = 0;
    // carrier1 = new Ship(5, 'carrier');
    // battleship1 = new Ship(4, 'battleship');
    // destroyer1 = new Ship(3, 'destroyer');
    // submarine1 = new Ship(3, 'submarine');
    // patrol1 = new Ship(2, 'patrol');

    // carrier2 = new Ship(5, 'carrier');
    // battleship2 = new Ship(4, 'battleship');
    // destroyer2 = new Ship(3, 'destroyer');
    // submarine2 = new Ship(3, 'submarine');
    // patrol2 = new Ship(2, 'patrol');
    const mainCont = document.querySelector('#mainContainer');
    mainCont.innerHTML = "";

    render(player1, 'player1', count, [carrier1, battleship1, destroyer1, submarine1, patrol1]);
    render(player2, 'player2', count, [carrier2, battleship2, destroyer2, submarine2, patrol2]);
    displayShips();

    const player1Board = document.querySelector('#player1');
    const player2Board = document.querySelector('#player2');
    for (let i = 0; i < 10; i++) {
        const id = 'row' + i;
        const ele1 = player1Board.querySelector('#row' + i);
        const ele2 = player2Board.querySelector('#row' + i);
        const pieces1 = ele1.querySelectorAll('.player1');
        const pieces2 = ele2.querySelectorAll('.player2');

        pieces1.forEach((piece) => {
            piece.addEventListener('click', function() { placeShip(piece, player1, player2, count) });
        });
        count = 0;

        pieces2.forEach((piece) => {


            piece.addEventListener('click', function() {
                manageTurn(piece, player1, player2, count)
            });

        });
    }
    if (player1Board) {
        player1Board.classList.add('active');
    }


}







export { newGame };
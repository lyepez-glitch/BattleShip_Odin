import { Player } from './Player.js';
import { render } from './render.js';
import { newGame } from './newGame.js';
import { GameBoard } from './GameBoard.js';
import { Ship } from './ship.js';


let player1 = new Player('Real', new GameBoard());
let player2 = new Player('Computer', new GameBoard());
let count = 0;
let carrier1 = new Ship(5, 'carrier'),
    battleship1 = new Ship(4, 'battleship'),
    destroyer1 = new Ship(3, 'destroyer'),
    submarine1 = new Ship(3, 'submarine'),
    patrol1 = new Ship(2, 'patrol')

let carrier2 = new Ship(5, 'carrier'),
    battleship2 = new Ship(4, 'battleship'),
    destroyer2 = new Ship(3, 'destroyer'),
    submarine2 = new Ship(3, 'submarine'),
    patrol2 = new Ship(2, 'patrol')

carrier1.addChild(
    [new Ship(1, 'carrier1'),
        new Ship(1, 'carrier1'),
        new Ship(1, 'carrier1'),
        new Ship(1, 'carrier1'),
        new Ship(1, 'carrier1')
    ]
);


battleship1.addChild([new Ship(1, 'battleship1'), new Ship(1, 'battleship1'), new Ship(1, 'battleship1'), new Ship(1, 'battleship1')]);

destroyer1.addChild([new Ship(1, 'destroyer1'), new Ship(1, 'destroyer1'), new Ship(1, 'destroyer1')]);

submarine1.addChild([new Ship(1, 'sub1'), new Ship(1, 'sub1'), new Ship(1, 'sub1')]);

patrol1.addChild([new Ship(1, 'patrol1'), new Ship(1, 'patrol1')]);



carrier2.addChild([new Ship(1, 'carrier2'), new Ship(1, 'carrier2'), new Ship(1, 'carrier2'), new Ship(1, 'carrier2'), new Ship(1, 'carrier2')]);


battleship2.addChild([new Ship(1, 'battleship2'), new Ship(1, 'battleship2'), new Ship(1, 'battleship2'), new Ship(1, 'battleship2')]);

destroyer2.addChild([new Ship(1, 'destroyer2'), new Ship(1, 'destroyer2'), new Ship(1, 'destroyer2')]);

submarine2.addChild([new Ship(1, 'sub2'), new Ship(1, 'sub2'), new Ship(1, 'sub2')]);

patrol2.addChild([new Ship(1, 'patrol2'), new Ship(1, 'patrol2')]);














document.addEventListener("DOMContentLoaded", (event) => {

    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function() { newGame(player1, player2, count, carrier1, battleship1, destroyer1, submarine1, patrol1, carrier2, battleship2, destroyer2, submarine2, patrol2) });

});

export { player1, player2, carrier1, battleship1, destroyer1, submarine1, patrol1, carrier2, battleship2, destroyer2, submarine2, patrol2 }
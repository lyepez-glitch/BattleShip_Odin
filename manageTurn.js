import { Ship } from './ship.js';
import { render } from './render.js';

import { player1, player2, carrier1, battleship1, destroyer1, submarine1, patrol1, carrier2, battleship2, destroyer2, submarine2, patrol2 } from './app.js';

async function manageTurn(piece, player1, player2, count) {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const vals = ['X', '<i class="fa-solid fa-bomb"><i>', 'missed', 'ship'];
    let icon;
    const mainCont = document.querySelector('#mainContainer')
    const score = mainCont.querySelector('#score')
    try {
        icon = piece.querySelector('i');

        if (icon.classList.contains('fa-bomb')) {

            return;
        }

    } catch (e) {

    }

    if (vals.includes(piece.innerHTML || vals.includes(piece.textContent))) {
        return;
    }



    const player1Board = document.querySelector('#player1');
    const player2Board = document.querySelector('#player2');



    const id = piece.id.split('-');
    let row = id[0],
        col = id[1];





    const player2Ship = player2.board.receiveAttack(row, col)
    if (player2Ship.isShipSunk()) {
        score.textContent = "You sunk my battleship!";
    }
    // console.log("player 2 item berfore render", updatedVal2)
    console.log("player2.board before render", player2.board.board)
    mainCont.innerHTML = "";
    render(player1, 'player1', count);
    render(player2, 'player2', count);
    displayShips();




    // setTimeout(function() {
    //     player1._board.randomReceiveAttack()


    //     player1Board.classList.add('active');
    //     player2Board.classList.remove('active');
    // }, 5000)



    // player1._board.board.forEach((row) => {
    //     row.forEach((col) => {
    //         const ship = player1._board.board[row][col];
    //         if (ship instanceof Ship) {
    //             if (ship.isSunk) {
    //                 const domEle = document.querySelector(`#${row}-${col}`)
    //                 domEle.innerHTML = '<i class="fa-solid fa-bomb"><i>';
    //             }
    //         }
    //     })
    // })
    // const ogRow = row;

    // console.log("play2brd")
    // player2.board.board.forEach((row, rowIndex) => {

    //     row.forEach((item, colIndex) => {
    //         const rowEle = document.querySelector('#row' + rowIndex);
    //         console.log("rowEle", rowEle, "colIndex", colIndex)




    //     })
    // })
    // console.log("play1 brd")
    // player1.board.board.forEach((row, rowIndex) => {

    //     row.forEach((item, colIndex) => {
    //         const rowEle = document.querySelector('#row' + rowIndex);
    //         console.log("rowEle", rowEle, "colIndex", colIndex)




    //     })
    // })



    await delay(2000);
    player2Board.classList.add('active');
    player1Board.classList.remove('active');
    // const updatedVal1 = player1.board.randomReceiveAttack()
    // console.log("player1 item before render", updatedVal1)

    player1Board.classList.add('active');
    player2Board.classList.remove('active');


    // setTimeout(() => {
    //     player2Board.classList.add('active');
    //     player1Board.classList.remove('active');

    const player1Ship1 = player1._board.randomReceiveAttack()
    const player1Ship2 = player1._board.randomReceiveAttack()
    const player1Ship3 = player1._board.randomReceiveAttack()
    if (player1Ship1.isShipSunk()) {
        score.textContent = "You sunk my battleship!";
    }
    if (player1Ship2.isShipSunk()) {
        score.textContent = "You sunk my battleship!";
    }

    if (player1Ship3.isShipSunk()) {
        score.textContent = "You sunk my battleship!";
    }

    //     player1Board.classList.add('active');
    //     player2Board.classList.remove('active');



    // }, 3000)
    console.log("player1.board before render", player1.board.board)
    mainCont.innerHTML = "";
    render(player1, 'player1', count);
    render(player2, 'player2', count);
    displayShips();
    // const coord = '#' + row + '-' + col;
    // const domeEle = document.querySelector(coord)



}

export { manageTurn };
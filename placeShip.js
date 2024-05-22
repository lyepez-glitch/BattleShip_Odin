import { Ship } from './Ship.js';
import { render } from './render.js';
import { disallowPlacingShip } from './disallowPlaceShip.js';
import { carrier1, battleship1, destroyer1, submarine1, patrol1, carrier2, battleship2, destroyer2, submarine2, patrol2 } from './app.js'


function placeShip(piece, player1, player2) {
    let newShip1, newShip2;
    if (count === 0) {
        newShip1 = carrier1;
    } else if (count === 1) {
        newShip1 = battleship1;
    } else if (player.shipCount === 2) {
        newShip1 === destroyer1;
    } else if (count === 3) {
        newShip1 = submarine1;
    } else if (count === 4) {
        newShip1 = patrol1;
    }

    if (count === 0) {
        newShip2 = carrier2;
    } else if (count === 1) {
        newShip2 = battleship2;
    } else if (count === 2) {
        newShip2 === destroyer2;
    } else if (count === 3) {
        newShip2 = submarine2;
    } else if (count === 4) {
        newShip2 = patrol2;
    }




    const mainCont = document.querySelector('#mainContainer')
    const score = mainCont.querySelector('#score')
    let icon;
    try {
        icon = piece.querySelector('i');

        if (icon.classList.contains('fa-bomb')) {
            return;
        }

    } catch (e) {

    }
    const vals = ['X', '<i class="fa-solid fa-bomb"><i>', 'missed', 'ship'];
    if (vals.includes(piece.innerHTML || vals.includes(piece.textContent))) {
        return;
    }

    if (piece.classList.contains('player1') && count < 5) {
        const id = piece.id.split('-');

        let row = id[0],
            col = id[1];


        player1._board.place(newShip1, row, col)
        player2._board.randomPlace(newShip2);
        count++;
        count++;

        if (count === 5) {

            disallowPlacingShip();
        }
    }



    mainCont.innerHTML = ""
    render(player1, 'player1', count);
    render(player2, 'player2', count);
    displayShips();
}

export { placeShip };
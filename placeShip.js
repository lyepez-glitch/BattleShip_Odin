import { Ship } from './Ship.js';
import { render } from './render.js';
import { disallowPlacingShip } from './disallowPlaceShip.js';



function placeShip(piece, player1, player2, count) {

    const ship1 = new Ship(2);
    const ship2 = new Ship(2);
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


        player1._board.place(ship1, row, col)
        player2._board.randomPlace(ship2);
        count++;

        if (count === 5) {

            disallowPlacingShip();
        }
    }



    mainCont.innerHTML = ""
    render(player1, 'player1', count);
    render(player2, 'player2', count);
}

export { placeShip };
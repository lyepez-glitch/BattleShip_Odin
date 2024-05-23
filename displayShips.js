import { player1, player2, carrier1, battleship1, destroyer1, submarine1, patrol1, carrier2, battleship2, destroyer2, submarine2, patrol2 } from './app.js'


const displayShips = () => {
    let ships1 = [carrier1, battleship1, destroyer1, submarine1, patrol1]
    let ships2 = [carrier2, battleship2, destroyer2, submarine2, patrol2]
    const player1Div = document.querySelector("#player1")
    const player2Div = document.querySelector("#player2")
    ships1.forEach((ship) => {
        let parentDiv1 = document.createElement('div');
        if (ship.isShipSunk()) {
            parentDiv1.style.backgroundColor = 'red';
        } else {
            parentDiv1.style.backgroundColor = 'blue';
        }
        ship.children.forEach((child) => {
            let childDiv = document.createElement('div');
            if (ship.isShipSunk()) {
                childDiv.style.backgroundColor = 'red';
            } else {
                childDiv.style.backgroundColor = 'blue';
            }
            parentDiv1.appendChild(childDiv);
        })
        player1Div.appendChild(parentDiv1);
    })
    ships2.forEach((ship) => {
        let parentDiv2 = document.createElement('div');
        if (ship.isShipSunk()) {
            parentDiv2.style.backgroundColor = 'red';
        } else {
            parentDiv2.style.backgroundColor = 'blue';
        }
        ship.children.forEach((child) => {
            let childDiv = document.createElement('div');
            if (ship.isShipSunk()) {
                childDiv.style.backgroundColor = 'red';
            } else {
                childDiv.style.backgroundColor = 'blue';
            }
            parentDiv2.appendChild(childDiv);
        })
        player2Div.appendChild(parentDiv2);
    })

}

export { displayShips };
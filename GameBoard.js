import { Ship } from './Ship.js';
import { player1, player2, carrier1, battleship1, destroyer1, submarine1, patrol1, carrier2, battleship2, destroyer2, submarine2, patrol2 } from './app.js';
export class GameBoard {
    constructor() {
        this.board = []
        for (let i = 0; i < 10; i++) {
            let row = [];
            for (let j = 0; j < 10; j++) {
                row.push(0);
            }
            this.board[i] = row;
        }

        this.missedAttacks = [];
        this.placed = [];
        this.successfulHits = [];
    }
    getBoard() {
        return this.board;
    }
    place(ship, row, column) {

        //this.board[row][column] = ship;

        for (let i = 0; i < ship.children.length; i++) {

            this.board[row][parseInt(column) + parseInt(i)] = ship.children[i];
        }



    }
    isPlaced(randomIndex, randomCol) {
        this.placed.forEach((obj) => {
            if (obj["row"] === randomIndex && obj["col"] === randomCol) {
                return true;
            }

        })
        return false;
    }
    isMissed(randomIndex, randomCol) {
        this.missedAttacks.forEach((obj) => {
            if (obj["row"] === randomIndex && obj["col"] === randomCol) {
                return true;
            }

        })
        return false;
    }



    isAttacked = (row, col) => {
        this.successfulHits.forEach((hit) => {
            if (hit.includes(row) && hit.includes(col)) {
                return true;
            }
        })
        return false;
    }
    randomReceiveAttack = () => {
        let randomIndex = Math.floor(Math.random() * 10);
        let randomCol = Math.floor(Math.random() * 10);
        while (this.isMissed(randomIndex, randomCol) || this.isAttacked(randomIndex, randomCol)) {
            randomIndex = Math.floor(Math.random() * 10);
            randomCol = Math.floor(Math.random() * 10);
        }
        const ship = this.board[randomIndex][randomCol];

        if (ship !== 0) {
            console.log('random attack', ship)
            if (ship.children) {
                if (!ship.isSunk) {
                    ship.hit();
                    this.successfulHits.push([randomIndex, randomCol])
                }



            }


        } else {
            this.board[randomIndex][randomCol] = 'missed';
            this.missedAttacks.push(randomIndex, randomCol)
        }

        return this.board[randomIndex][randomCol];
    }
    randomPlace = (ship) => {
        let randomIndex = Math.floor(Math.random() * 10);
        let randomCol = Math.floor(Math.random() * 5);
        while (this.isPlaced(randomIndex, randomCol)) {
            randomIndex = Math.floor(Math.random() * 10);
            randomCol = Math.floor(Math.random() * 5);
        }

        for (let i = 0; i < ship.children.length; i++) {
            const child = ship.children[i];

            this.board[randomIndex][parseInt(randomCol) + parseInt(i)] = child;
        }
        // this.board.forEach((row, rowIndex) => {

        //     if (randomIndex === rowIndex) {
        //         row.forEach((col, colIndex) => {
        //             if (randomCol === colIndex) {
        //                 // this.board[rowIndex][colIndex] = ship;
        //                 for (let i = 0; i < ship.children.length; i++) {
        //                     const child = ship.children[i];


        //                     randomIndex = Math.floor(Math.random() * 10);
        //                     randomCol = Math.floor(Math.random() * 10);
        //                     while (this.isPlaced(randomIndex, randomCol)) {
        //                         randomIndex = Math.floor(Math.random() * 10);
        //                         randomCol = Math.floor(Math.random() * 10);

        //                     }
        //                     this.board[rowIndex][colIndex + i] = child;
        //                     this.placed.push({ "row": randomIndex, "col": randomCol })






        //                 }

        //             }
        //         })

        //     }

        // })

    }
    receiveAttack(row, column) {

        const ship = this.board[row][column];

        if (ship !== 0) {

            if (ship.children) {
                console.log("receive attack method ship", ship)
                if (!ship.isSunk) {
                    ship.hit();
                    this.successfulHits.push([row, column])
                }
                // //debugging
                // if (ship.isShipSunk()) {
                //     this.board[row][column] = -1;
                // }
                // //


            }



        } else {
            this.missedAttacks.push([row, column])
            this.board[row][column] = 'missed';
        }

        return this.board[row][column]
    }
    allSunk(items) {

        let count = 0;


        function countSunk(ships) {
            ships.forEach((ship) => {

                if (ship !== 0) {
                    if (ship instanceof Ship) {
                        if (ship.isShipSunk()) {
                            count++;
                        }
                    }

                }

            })
        }
        countSunk(items);


        if (count < 5) {
            return false;
        } else {
            return true;
        }

    }
}
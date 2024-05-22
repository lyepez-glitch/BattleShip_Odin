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
            this.board[row][column + i] = ship;
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
            if (ship instanceof Ship) {
                if (!ship.isShipSunk()) {
                    ship.hit();
                    this.successfulHits.push([randomIndex, randomCol])
                }
                // //debugging
                // if (ship.isShipSunk()) {
                //     this.board[randomIndex][randomCol] = -1;
                // }
                // //


            }


        } else {
            this.board[randomIndex][randomCol] = 'missed';
            this.missedAttacks.push(randomIndex, randomCol)
        }
        console.log("player 1 piece randomly attacked by computer", ship, "updated val", this.board[randomIndex][randomCol]);
        return this.board[randomIndex][randomCol];
    }
    randomPlace = (ship) => {
        let randomIndex = Math.floor(Math.random() * 10);
        let randomCol = Math.floor(Math.random() * 10);
        while (this.isPlaced(randomIndex, randomCol)) {
            randomIndex = Math.floor(Math.random() * 10);
            randomCol = Math.floor(Math.random() * 10);
        }

        this.board.forEach((row, rowIndex) => {
            if (randomIndex === rowIndex) {
                row.forEach((col, colIndex) => {
                    if (randomCol === colIndex) {
                        // this.board[rowIndex][colIndex] = ship;
                        for (let i = 0; i < ship.children.length; i++) {
                            const child = ship.children[i];
                            if (this.isPlaced(rowIndex, colIndex + i)) {
                                randomIndex = Math.floor(Math.random() * 10);
                                randomCol = Math.floor(Math.random() * 10);
                                while (this.isPlaced(randomIndex, randomCol)) {
                                    randomIndex = Math.floor(Math.random() * 10);
                                    randomCol = Math.floor(Math.random() * 10);
                                    this.board[randomIndex][randomCol] = child;
                                    this.placed.push({ "row": randomIndex, "col": randomCol })
                                }
                            } else {
                                this.board[rowIndex][colIndex + i] = child;
                                this.placed.push({ "row": rowIndex, "col": colIndex })
                            }


                        }

                    }
                })

            }

        })

    }
    receiveAttack(row, column) {

        const ship = this.board[row][column];

        if (ship !== 0) {
            if (ship instanceof Ship) {
                if (!ship.isShipSunk()) {
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
        console.log("computer piece being attacked by player 1", ship, "updated val", this.board[row][column])
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
                // if (item === -1) {
                //     count++;
                // }
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
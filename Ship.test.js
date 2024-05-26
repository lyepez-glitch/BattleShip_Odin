const { Ship } = require('./Ship');
const { GameBoard } = require('./GameBoard');
const { Player } = require('./Player');
describe('class Ship', () => {
    let ship;
    beforeEach(() => {
        ship = new Ship(2);
    })
    test('class should be instantiated', () => {
        expect(ship.length).not.toBe(0);
        expect(ship.hits).toBe(0);
        expect(ship.isSunk).toBe(false);
    })
    test('class should hit', () => {
        ship.hit();
        expect(ship.hits).toBe(1);
    })
    test('ship should be sunk', () => {
        ship.hit();
        ship.hit();
        expect(ship.isSunk).toBeTruthy();
    })
})




// describe('class GameBoard', () => {
//     beforeEach(() => {
//         const board = new GameBoard();
//     })
//     test.only('class GameBoard should place ships on board', () => {
//         board.place(ship, 0, 0);
//         expect(board.getBoard()[0][0]).toEqual(ship);

//     })
//     test('class GameBoard should receive attack', () => {
//         board.place(ship, 0, 0);
//         board.receiveAttack(0, 0);
//         expect(ship.getHits()).toBe(1);
//         board.receiveAttack(1, 1);
//         expect(board.missedAttacks.length).toBe(1);
//     })
//     test('GameBoards should report if all ships are sunk', () => {
//         expect(board.allSunk()).toBe(false);
//         ship.hit();
//         ship.hit();
//         ship.hit();
//         board.place(ship, 0, 0);
//         expect(board.allSunk()).toBe(true);



//     })
// })

// describe('class Player', () => {
//     beforeEach(() => {
//         const ship = new Ship(2);
//         const board = new GameBoard();
//         const player1 = new Player('real');
//         const player2 = new Player('computer');
//     })
//     test.only('player should have a type', () => {
//         expect(player1.getType()).toBe('real');
//         expect(player2.getType()).toBe('computer');
//     })
//     test.only('each player should have it\'s own gameboard', () => {
//             expect(player1.board).not.toEqual(player2.board);
//             expect(player1.board).toBeTruthy();
//             expect(player1).toHaveProperty('board')
//             expect(player1.board)).toEqual(expect.any(GameBoard))

//     })
// })
class Ship {
    constructor(length, id = "") {
        this.length = length;
        this.hits = 0;
        this.isSunk = false;
        this.children = [];
        this.id = id;
        this.shipCount = 0;
    }
    hit() {
        this.hits++;
        this.isSunk = this.isShipSunk();
    }
    getCount() {
        return this.shipCount;
    }
    addChild(children) {
        this.children.concat(ship);
    }
    children() {
        return this.children;
    }

    getId() {
        return this.id;
    }

    isShipSunk() {
        let count = 0;
        this.children.forEach((ship) => {
            if (ship.isShipSunk()) {
                count++;
            }
        })
        if (count === this.children.length) {
            return true;
        } else {
            return false;
        }
    }
}
export { Ship };
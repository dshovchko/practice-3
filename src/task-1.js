
const NORTH = "north",
    EAST = "east",
    SOUTH = "south",
    WEST = "west";

class Rover {
    constructor(x = 0, y = 0, direction = NORTH) {

        this.directions = [
            { name: NORTH, moving: distance => { this.position.y += distance; } },
            { name: EAST, moving: distance => { this.position.x += distance; } },
            { name: SOUTH, moving: distance => { this.position.y -= distance; } },
            { name: WEST, moving: distance => { this.position.x -= distance; } }
        ];
        
        if ((typeof x !== "number") || (x % 1 !== 0) || (typeof y !== "number") || (y % 1 !== 0)) {
            throw new TypeError("Wrong coords!");
        }

        this.position = { x, y };
        
        this.direction = this.directions.findIndex(e => e.name === direction);
        if (this.direction === -1) {
            throw new TypeError("Wrong direction!");
        }
    }

    left() {
        this.direction = (this.direction === 0) ? 3 : (this.direction - 1);

        return this;
    }

    right() {
        this. direction = (this.direction === 3) ? 0 : (this.direction + 1);

        return this;
    }

    move(n) {
        if ((typeof n !== "number") || (n % 1 !== 0)) {
            throw new TypeError("Wrong distance!");
        }

        this.directions[this.direction].moving(n);

        return this;
    }

    getPosition() {
        return this.position;
    }

    getDirection() {
        return this.directions[this.direction].name;
    }
}

export { NORTH, EAST, SOUTH, WEST, Rover };

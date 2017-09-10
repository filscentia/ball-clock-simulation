


class Ball {
    constructor(id,holdingRack) {
        this.id = id;
        this.holdingRack = holdingRack;
    }

    toString(){
        return this.id;
    }
}

module.exports = Ball;
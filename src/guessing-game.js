class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let mid = (this.min+((this.max-this.min) / 2))

        return Math.round(mid)
    }

    lower() {
        this.max = Math.round((this.min+((this.max-this.min) / 2)))


    }

    greater() {
        this.min = Math.round((this.min+((this.max-this.min) / 2)))

    }
}

module.exports = GuessingGame;

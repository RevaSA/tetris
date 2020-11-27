import { POINTS, LINES_PER_LEVEL, SELECTORS } from './constants'

class Account {
    constructor() {
        this.cache()
        this.initProxyValues()
        this.subscribe('lines', this.onChangeLine.bind(this))
    }

    cache() {
        this.callbacks = {
            score: [],
            lines: [],
            level: [],
        }
        this.elements = {
            score: document.querySelector(SELECTORS.score),
            lines: document.querySelector(SELECTORS.lines),
            level: document.querySelector(SELECTORS.level),
        }
    }

    initProxyValues() {
        const values = {
            score: 0,
            lines: 0,
            level: 0,
        }

        this.values = new Proxy(values, {
            set: (target, key, value) => {
                const oldValue = target[key]

                if (oldValue !== value) {
                    target[key] = value
                    this.elements[key].textContent = value
                    this.callbacks[key].forEach(cb => cb(value, oldValue))
                }

                return true
            }
        })
    }

    reset() {
        this.values.score = 0
        this.values.lines = 0
        this.values.level = 0
    }

    subscribe(key, cb) {
        if (this.callbacks[key]) {
            this.callbacks[key].push(cb)
        }
    }

    getLinesClearPoints(countLines) {
        const lines = [0, POINTS.SINGLE, POINTS.DOUBLE, POINTS.TRIPLE, POINTS.SINGLE, POINTS.TETRIS]
        return (this.values.level + 1) * lines[countLines]
    }

    onChangeLine(value, oldValue) {
        if (value > oldValue) {
            this.values.score += this.getLinesClearPoints(value - oldValue)
        }

        if (this.values.lines >= LINES_PER_LEVEL) {
            this.values.level++
            this.values.lines -= LINES_PER_LEVEL
        }
    }
}

export default Account

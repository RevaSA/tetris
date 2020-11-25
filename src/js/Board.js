import { ROWS, COLS } from './constants'

class Board {
    constructor() {
        this.tetromino = null
    }

    reset() {
        this.grid = this.getEmptyBoard()
    }

    getEmptyBoard() {
        return [...Array(ROWS)].map(() => Array(COLS).fill(0))
    }
}

export default Board

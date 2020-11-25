import { ROWS, COLS } from './constants'

class Board {
    constructor() {
        this.tetromino = null
    }

    reset() {
        this.grid = this.getEmptyBoard()
    }

    valid(p) {
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                const x = p.x + dx
                const y = p.y + dy
                return value === 0 || (this.insideWalls(x) && this.aboveFloor(y) && this.notOccupied(x, y))
            })
        })
    }

    insideWalls(x) {
        return x >= 0 && x < COLS
    }

    aboveFloor(y) {
        return y <= ROWS
    }

    // не занята ли клетка поля другими фигурками
    notOccupied(x, y) {
        return this.grid[y] && this.grid[y][x] === 0
    }

    getEmptyBoard() {
        return [...Array(ROWS)].map(() => Array(COLS).fill(0))
    }
}

export default Board

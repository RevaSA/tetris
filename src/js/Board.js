import { ROWS, COLS, KEY, MOVES, COLORS } from './constants'
import Tetromino from './Tetromino'

class Board {
    constructor(ctx) {
        this.ctx = ctx
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

    draw() {
        this.tetromino.draw();
        this.drawBoard();
    }

    drawBoard() {
        this.grid.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) {
                    this.ctx.fillStyle = COLORS[value - 1];
                    this.ctx.fillRect(x, y, 1, 1);
                }
            });
        });
    }

    drop() {
        const p = MOVES[KEY.DOWN](this.tetromino);
        if (this.valid(p)) {
            this.tetromino.move(p);
        } else {
            this.freeze();
            this.clearLines();
            this.tetromino = new Tetromino(this.ctx);
            this.tetromino.setStartPosition();
        }
    }

    freeze() {
        this.tetromino.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.grid[y + this.tetromino.y][x + this.tetromino.x] = value;
                }
            });
        });
    }

    clearLines() {
        let lines = 0;

        this.grid.forEach((row, y) => {
            if (row.every(value => value > 0)) {
                lines++;
                this.grid.splice(y, 1);
                this.grid.unshift(Array(COLS).fill(0));
            }
        });
    }
}

export default Board

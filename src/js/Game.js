import { ROWS, COLS, BLOCK_SIZE, SELECTORS, KEY } from './constants'
import Board from './Board'
import Tetromino from './Tetromino'

class Game {
    constructor() {
        this.cache()
        this.events()
        this.initCanvas()
        this.board = new Board()
    }

    cache() {
        this.canvas = document.querySelector(SELECTORS.canvas)
        this.buttonPlay = document.querySelector(SELECTORS.buttonPlay)
        this.moves = {
            [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
            [KEY.LEFT]: p => ({ ...p, x: p.x - 1 }),
            [KEY.UP]: p => this.board.rotateTetromino(p),
            [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
            [KEY.DOWN]: p => ({ ...p, y: p.y + 1 }),
        }
    }

    events() {
        this.buttonPlay.addEventListener('click', this.play.bind(this))
        document.addEventListener('keydown', this.moveTetromino.bind(this))
    }

    initCanvas() {
        this.ctx = this.canvas.getContext('2d')
        this.ctx.canvas.width = COLS * BLOCK_SIZE
        this.ctx.canvas.height = ROWS * BLOCK_SIZE
        this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE)
    }

    play() {
        this.board.reset()
        let tetromino = new Tetromino(this.ctx)
        tetromino.draw()

        this.board.tetromino = tetromino
        console.table(this.board.grid)
    }

    moveTetromino(event) {
        if (!this.moves[event.keyCode]) {
            return
        }

        event.preventDefault()
        let p = this.moves[event.keyCode](this.board.tetromino)

        if (event.keyCode === KEY.SPACE) {
            // Жесткое падение
            while (this.board.valid(p)) {
                this.board.tetromino.move(p)
                this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
                this.board.tetromino.draw()
                p = this.moves[KEY.DOWN](this.board.tetromino)
            }
        } else if (this.board.valid(p)) {
            // реальное перемещение фигурки, если новое положение допустимо
            this.board.tetromino.move(p)

            // стирание старого отображения фигуры на холсте
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

            this.board.tetromino.draw()
        }
    }
}

export default Game

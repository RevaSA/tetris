import { ROWS, COLS, BLOCK_SIZE, SELECTORS } from './constants'
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
    }

    events() {
        this.buttonPlay.addEventListener('click', this.play.bind(this))
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
}

export default Game

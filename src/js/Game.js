import { ROWS, COLS, BLOCK_SIZE, SELECTORS, KEY, MOVES } from './constants'
import Board from './Board'
import Tetromino from './Tetromino'

class Game {
    constructor() {
        this.cache()
        this.events()
        this.initCanvas()
        this.board = new Board(this.ctx)
    }

    cache() {
        this.canvas = document.querySelector(SELECTORS.canvas)
        this.buttonPlay = document.querySelector(SELECTORS.buttonPlay)
        this.time = { start: 0, elapsed: 0, level: 1000 }
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
        const tetromino = new Tetromino(this.ctx)

        this.board.reset();
        this.board.tetromino = tetromino;
        this.board.tetromino.setStartPosition();
        this.animate();
    }

    moveTetromino(event) {
        if (!MOVES[event.keyCode]) {
            return
        }

        event.preventDefault()
        let p = MOVES[event.keyCode](this.board.tetromino)

        if (event.keyCode === KEY.SPACE) {
            // Жесткое падение
            while (this.board.valid(p)) {
                this.board.tetromino.move(p)
                this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
                this.board.tetromino.draw()
                p = MOVES[KEY.DOWN](this.board.tetromino)
            }
        } else if (this.board.valid(p)) {
            // реальное перемещение фигурки, если новое положение допустимо
            this.board.tetromino.move(p)

            // стирание старого отображения фигуры на холсте
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

            this.board.tetromino.draw()
        }
    }

    animate(now = 0) {
        // обновить истекшее время
        this.time.elapsed = now - this.time.start;

        // если время отображения текущего фрейма прошло
        if (this.time.elapsed > this.time.level) {
            // начать отсчет сначала
            this.time.start = now;

            // "уронить" активную фигурку
            this.board.drop();
        }

        // очистить холст для отрисовки нового фрейма
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // отрисовать игровое поле
        this.board.draw();
        requestAnimationFrame(this.animate.bind(this));
    }
}

export default Game

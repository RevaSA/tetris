import { ROWS, COLS, BLOCK_SIZE, SELECTORS, KEY, MOVES, POINTS, TIME_STEP, TIME_MIN } from './constants'
import Board from './Board'
import Tetromino from './Tetromino'
import Account from './Account';

class Game {
    constructor() {
        this.cache()
        this.events()
        this.initCanvas()
        this.account = new Account()
        this.board = new Board(this.ctx, this.account)
        this.account.subscribe('level', this.onChangeLevel.bind(this))
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

    resetGame() {
        this.account.reset()
        this.board.reset()
        this.board.tetromino = new Tetromino(this.ctx)
        this.board.tetromino.setStartPosition()
    }

    play() {
        this.resetGame()
        this.animate()
    }

    moveTetromino(event) {
        if (!MOVES[event.keyCode]) {
            return
        }

        event.preventDefault()
        let p = MOVES[event.keyCode](this.board.tetromino)

        if (event.keyCode === KEY.SPACE) {
            while (this.board.valid(p)) {
                this.account.values.score += POINTS.HARD_DROP
                this.board.tetromino.move(p)
                p = MOVES[KEY.DOWN](this.board.tetromino)
            }
        } else if (this.board.valid(p)) {
            this.board.tetromino.move(p)

            if (event.keyCode === KEY.DOWN) {
                this.account.values.score += POINTS.SOFT_DROP
            }
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
            if (!this.board.drop()) {
                this.gameOver()
                return
            }
        }

        // очистить холст для отрисовки нового фрейма
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // отрисовать игровое поле
        this.board.draw();
        this.requestId = requestAnimationFrame(this.animate.bind(this));
    }

    onChangeLevel() {
        this.time.level = Math.max(this.time.level - TIME_STEP, TIME_MIN)
    }

    gameOver() {
        cancelAnimationFrame(this.requestId);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(1, 3, 8, 1.2);
        this.ctx.font = '1px Arial';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText('GAME OVER', 1.8, 4);
    }
}

export default Game

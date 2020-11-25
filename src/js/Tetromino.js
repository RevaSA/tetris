import { COLORS, SHAPES } from './constants'

class Tetromino {
    constructor(ctx) {
        this.ctx = ctx
        this.spawn()
    }

    randomizeType(noOfTypes) {
        return Math.floor(Math.random() * noOfTypes);
    }

    spawn() {
        this.typeId = this.randomizeType(COLORS.length - 1);
        this.shape = SHAPES[this.typeId];
        this.color = COLORS[this.typeId];
        this.x = 0;
        this.y = 0;
    }

    setStartPosition() {
        this.x = this.typeId === 4 ? 4 : 3;
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                // this.x, this.y - левый верхний угол фигурки на игровом поле
                // x, y - координаты ячейки относительно матрицы фигурки (3х3)
                // this.x + x - координаты ячейки на игровом поле
                if (value) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1)
                }
            })
        })
    }

    move(p) {
        this.x = p.x;
        this.y = p.y;
    }
}

export default Tetromino

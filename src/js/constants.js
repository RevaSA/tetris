export const COLS = 10
export const ROWS = 20
export const BLOCK_SIZE = 30
export const SELECTORS = {
    canvas: '[data-canvas]',
    canvasNext: '[data-canvas-next]',
    score: '[data-score]',
    lines: '[data-lines]',
    level: '[data-level]',
    buttonPlay: '[data-button-play]',
}
export const KEY = {
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
}
export const MOVES = {
    [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
    [KEY.LEFT]: p => ({ ...p, x: p.x - 1 }),
    [KEY.UP]: p => {
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
            }
        }

        p.shape.forEach(row => row.reverse());
        return p;
    },
    [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]: p => ({ ...p, y: p.y + 1 }),
}
export const COLORS = [
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
]
export const SHAPES = [
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
    [[0, 0, 3], [3, 3, 3], [0, 0, 0]],
    [[4, 4], [4, 4]],
    [[0, 5, 5], [5, 5, 0], [0, 0, 0]],
    [[0, 6, 0], [6, 6, 6], [0, 0, 0]],
    [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
]
export const POINTS = {
    SINGLE: 100,
    DOUBLE: 300,
    TRIPLE: 500,
    TETRIS: 800,
    SOFT_DROP: 1,
    HARD_DROP: 2,
}
export const LINES_PER_LEVEL = 2
export const TIME_STEP = 100
export const TIME_MIN = 100

import { ROWS, COLS, BLOCK_SIZE } from './constants';

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Устанавливаем размеры холста
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Устанавливаем масштаб
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

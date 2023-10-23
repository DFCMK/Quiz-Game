const gameBoard = document.querySelector("game-board");
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");

const snake = [{x: 10, y: 10}];

let direction = "right";
let level = 0;
let score = 1;
let speed = 5;

function main() {
    update();
    draw();

    setTimeout(main, 1000/ speed);
}

function update() {}

function draw() {}
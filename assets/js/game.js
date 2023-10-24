let grid = document.querySelector(".grid");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let ScoreDisplay = document.querySelector(".left");
let bottom = document.querySelector(".bottom");
let right = document.querySelector(".right");
let up = document.querySelector(".top");
let width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 1;
let intervalTime = 0;
let interval = 0;

document.addEventListener("DOMContentLoaded", function (){
    document.addEventListener("keyup", control);
    createBoard();
    startGame();
    playAgain.addEventListener("click", replay);
})

function createBoard(){
    popup.style.display = "none";
    for (let i = 0; i < 100; i++){
        let div = document.createElement("div");
        grid.appendChild(div);
    }
}

function startGame() {
    let squares = document.querySelectorAll(".grid div");
    randomApple(squares);

    direction = 1;
    ScoreDisplay.innerHTML = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    interval = setInterval(moveOutcome, intervalTime);
}

function moveOutcome() {
    let squares = document.querySelectorAll(".grid div");

    if (checkForHits(squares)) {
        alert("Game Over, You hit something!");
        popup.style.display = "flex";
        return clearInterval(interval);
    }
    else
    {
        moveSnake(squares);
    }
}

function moveSnake(squares) {
    let tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);
    eatApple(squares, tail);
    squares[currentSnake[0]].classList.add("snake");
}

function checkForHits(squares) {
   if (
    (currentSnake[0] + width >= width * width && directions === width) ||
    (currentSnake[0] % width === width -1 && directions === 1) ||
    (currentSnake[0] % width === 0 && directions === -1) ||
    (currentSnake[0] - width <= 0 && directions === -width) ||
    squares[currentSnake[0] + direction].classList.contains("snake")
    ){
        return true;
    }
    else
    {
        return false;
    }
}



/*const gameBoard = document.getElementById("game-board");
document.addEventListener("keydown", handleKeyDown);
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");

const snake = [{x: 10, y: 10}];

let snakeDirection = "right";
let level = 0;
let score = 1;
let speed = 5;

function main() {
    update();
    draw();

    setTimeout(main, 1000/ speed);
}

function handleKeyDown(event) {
    if (event.key === "ArrowUp" && snakeDirection !== "down") {
        snakeDirection = "up";
    }
    else if (event.key === "ArrowDown" && snakeDirection !== "up")
    {
        snakeDirection = "down";
    }
    else if (event.key === "ArrowRight" && snakeDirection !== "left")
    {
        snakeDirection = "right";
    }
    else if (event.key === "ArrowLeft" && snakeDirection !== "right")
    {
        snakeDirection = "left";
    }
}

function moveSnake(){}

function draw(gameBoard) {
    snake.forEach(segment => {
        let snakeBody = document.createElement("div");
        snakeBody.style.gridRowStart = segment.y;
        snakeBody.style.gridColumnStart = segment.x;
        snakeBody.classList.add('snake');
        gameBoard.appendChild(snakeBody);
    });
}*/
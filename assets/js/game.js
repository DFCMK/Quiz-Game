let grid = document.querySelector(".grid");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let scoreDisplay = document.querySelector(".scoreDisplay");
let left = document.querySelector(".left");
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
      });

function createBoard(){
    popup.style.display = "none";

    for (let i = 0; i < 100; i++) {
          let div = document.createElement("div");
          grid.appendChild(div);
        }
      }
      

function startGame() {
        let squares = document.querySelectorAll(".grid div");
        randomApple(squares);
        direction = 1;
        scoreDisplay.innerHTML = score;
        intervalTime = 1000;
        currentSnake = [2, 1, 0];
        currentIndex = 0;
        currentSnake.forEach((index) => squares[index].classList.add("snake"));
        interval = setInterval(moveOutcome, intervalTime);
      }

function moveOutcome(){
    let squares = document.querySelectorAll(".grid div");
    if (checkForHits(squares)) {
      alert("you hit something");
      popup.style.display = "flex";
      return clearInterval(interval);
    } else {
      moveSnake(squares);
    }
}

function moveSnake(squares) {
    let tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);
  // movement ends here
  eatApple(squares, tail);
  squares[currentSnake[0]].classList.add("snake");
}

function checkForHits(squares) {
    if (
        (currentSnake[0] + width >= width * width && direction === width) ||
        (currentSnake[0] % width === width - 1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] - width <= 0 && direction === -width) ||
        squares[currentSnake[0] + direction].classList.contains("snake")
      ) {
        return true;
      } else {
        return false;
      }
}
/**
 * 
 * This function defines what happens, when the snake eat an apple.It adds the poped up div in the moveSnake() back to the snakes tail. 
 *  
 */
function eatApple(squares, tail){
    if (squares[currentSnake[0]].classList.contains("apple")) {
        squares[currentSnake[0]].classList.remove("apple");
        squares[tail].classList.add("snake");
        currentSnake.push(tail);
        randomApple(squares);
        score++;
        speed++; 
        scoreDisplay.textContent = score;
        clearInterval(interval);
        intervalTime = intervalTime * speed;
        interval = setInterval(moveOutcome, intervalTime);
      }
}
/**
 * 
 * This function spawn the apples for the snake randomly on the game board. 
 */
function randomApple(squares) {
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
      } while (squares[appleIndex].classList.contains("snake"));
      squares[appleIndex].classList.add("apple");
    }

/**
 * 
 * This Function set up the controls for Keyboard users 
 */

document.onkeydown = control;

function control(event) {
    if (event.code === "ArrowRight") {
        direction = 1; // right
      } else if (event.code === "ArrowUp") {
        direction = -width; //if user press the up arrow, the snake will go ten divs up
      } else if (event.code === "ArrowLeft") {
        direction = -1; // left, the snake will go left one div
      } else if (event.code === "ArrowDown") {
        direction = +width; // down the snake head will instantly appear 10 divs below from the current div
      }
}

/**
 * controls for mobile devices
 */
up.addEventListener("click", () => (direction = -width));
bottom.addEventListener("click", () => (direction = +width));
left.addEventListener("click", () => (direction = -1));
right.addEventListener("click", () => (direction = 1));

/**
 * This function reset game and start new game at default, which got declared in the startGame().
 */

function replay() {
    grid.innerHTML = "";
    createBoard();
    startGame();
    popup.style.display = "none";}


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

let Start = document.getElementById("start-btn");
let next = document.getElementById("next-btn");
let questionBox =  document.getElementById("question-box");
let questionCard = document.getElementById("question");
let answerButtons = document.getElementById("answer-btn");
let results = document.getElementById("results");
let score = 0;
let incorrect = 0;
let gameStarted = false;
let replayMenu = document.getElementById("replay-menu");
let PlayAgain = document.getElementById("play-again-btn");
let Quit = document.getElementById("quit-btn");

let shuffleQuestions, currentQuestionIndex;

Start.addEventListener("click", function() {
    startGame();
    gameStarted = true;
    score = 0;
    incorrect = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("incorrect").textContent = incorrect;
    document.querySelector(".score-area").classList.remove("hide");
    document.getElementById("start-btn").style.visibility = "hidden"; //Hide start button after initialy clicked
  });

  next.addEventListener("click", nextCard); //initially hide the replay menu

  replayMenu.style.display = "none";
  
  function startGame(){
    Start.classList.add("hide");
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionBox.classList.remove("hide");
    nextCard();
  }

  function nextCard(){
    resetState();
    if (currentQuestionIndex < questions.length) {
        showQuestion(shuffleQuestions[currentQuestionIndex]);
    }
    else
    {
        showResult();
    }
}

function showQuestion(question){
    questionCard.innerText = question.question;
    answerButtons.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.classList.add("btn");
        button.innerText = answer;

        button.dataset.answer = index;

        button.addEventListener("click", () => checkAnswer(index));

        answerButtons.appendChild(button);
    });
  }

  function resetState(){

    while ( answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    next.classList.remove("hide");
  }

  function checkAnswer(selectedIndex) {
    
    const correctIndex = questions[currentQuestionIndex].correctAnswer;
    const buttons = answerButtons.getElementsByTagName("button");
  
    if (selectedIndex === correctIndex) {
      buttons[selectedIndex].style.backgroundColor = "green";
      score++;
      document.getElementById("score").textContent = score;
    } 
    else if (selectedIndex !== correctIndex)
    {
      buttons[selectedIndex].style.backgroundColor = "red";
      incorrect++;
      document.getElementById("incorrect").textContent = incorrect;
      gameOver();
    }
  
    for (const button of buttons) {
      button.disabled = true;
    }
  
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        nextCard();
      } else {
        showResult();
      }
    }, 1000);
  }

function showResult(){
    questionCard.innerText = "Quiz Finished!";
    resetState();
    startGame();
    reset(score, incorrect);
  }

  function reset() {
    incorrect = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("incorrect").textContent = incorrect;
  }

  function gameOver() {
    if(incorrect === 3) {
        alert("Game Over, you were three times wrong!");
        resetState();
        reset(incorrect, score);
        replayMenu.style.display = "block"; //show replay menu
    }
  }

  document.getElementById("play-again-btn").addEventListener("click", () => {
    replayMenu.style.display = "none";
  });

  document.getElementById("quit-btn").addEventListener("click", () => {
    replayMenu.style.display = "none";
  });


  let questions = [
    {
    question: "What is JavaScript primarily used for?",
    answers: [
        "Data analysis",
        "Server administration",
        "Adding interactivity to websites",
        "Video editing"
    ],
    correctAnswer: 2,
    wrongAnswer: [1, 0, 3]
},
{
    question: "Which of the following is not a JavaScript data type?",
    answers: [
        "Number",
        "String",
        "Boolean",
        "Float"
    ],
    correctAnswer: 3,
    wrongAnswer: [0, 2, 1]
},
{
    question: "What does the 'DOM' stand for in JavaScript?",
    answers: [
        "Document Object Model",
        "Data Object Model",
        "Document Order Model",
        "Document of Manipulation"
    ],
    correctAnswer: 0,
    wrongAnswer: [1, 2, 3]
},
{
    question: "How do you define a variable in JavaScript with a global Scope?",
    answers: [
        "let",
        "const",
        "var",
        "int"
    ],
    correctAnswer: 1,
    wrongAnswer: [0, 2, 3]
},
{
    question: "Which of the following JavaScript frameworks is used for building user interfaces?",
    answers: [
        "JQuery",
        "Mongoose",
        "Express",
        "React"
    ],
    correctAnswer: 3,
    wrongAnswer: [1, 2, 0]
},
{
    question: "What is the purpose of the 'if' statement in JavaScript?",
    answers: [
        "Loop through an array",
        "Declare a function",
        "Make decisions in your code",
        "Create a class"
    ],
    correctAnswer: 0,
    wrongAnswer: [1, 2, 3]
},
{
    question: "What method is used to add a new element to the end of an array in JavaScript?",
    answers: [
        "append()",
        "push()",
        "insert()",
        "add()"
    ],
    correctAnswer: 1,
    wrongAnswer: [0, 2, 3]
},
{
    question: "Which JavaScript function is used to perform an action after a specific time interval?",
    answers: [
        "setTimer()",
        "delay()",
        "setInterval()",
        "wait"
    ],
    correctAnswer: 2,
    wrongAnswer: [0, 1, 3]
},
{
    question: "What is the correct way to write a comment in JavaScript?",
    answers: [
        "//This is a comment",
        "<!--This is a comment-->",
        "++This is a comment++",
        "**This is a comment**"
    ],
    correctAnswer: 0,
    wrongAnswer: [1, 2, 3]
},
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            "Refers to the previous function",
            "Refers to a specific HTML element",
            "Refers to the current object",
            "Refers to a global variable"
        ],
        correctAnswer: 2,
        wrongAnswer: [0, 1, 3]
}
];
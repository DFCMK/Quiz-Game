let Start = document.getElementById("start-btn");
/*let next = document.getElementById("next-btn");*/
let questionBox =  document.getElementById("question-box");
let questionCard = document.getElementById("question");
let answerButtons = document.getElementById("answer-btn");
let results = document.getElementById("results");
let score = 0;
let incorrect = 0;
let gameStarted = false;
let replayMenu = document.getElementById("replay-menu");
let PlayAgain = document.getElementById("play-again-btn");
let title = document.getElementById("title");
/*let Quit = document.getElementById("quit-btn");*/

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
    document.getElementById("")
  });

  /*next.addEventListener("click", nextCard);*/

  replayMenu.style.display = "none";
  
  function startGame(){
    Start.classList.add("hide");

    //Shuffle questions and select 15 questions
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    let selectedQuestions = shuffleQuestions.slice(0, 15);
    
    //use selected questions in the quiz
    shuffleQuestions = selectedQuestions;

    currentQuestionIndex = 0;
    questionBox.classList.remove("hide");
    document.getElementById("counter").style.display = "block"; // show the counter
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
        startGame();
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

    //update the counter
    document.getElementById("counter").textCounter = (currentQuestionIndex + 1) + "/" + question.lenght;
  }

  function resetState(){

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    /*next.classList.remove("hide");*/
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
      } else 
      {
        showResult();
      }
    }, 1000);
  }

function showResult(){
    questionCard.innerText = "Quiz Finished!";
    resetState();
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
        title.classList.add("hide");
    }
  }

  document.getElementById("play-again-btn").addEventListener("click", () => {
    replayMenu.style.display = "none";
    gameStarted = flase;
  });

  /*document.getElementById("quit-btn").addEventListener("click", () => {
    replayMenu.style.display = "none";
  });*/

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
    question: "What is the correct way to define a variable in JavaScript with a global Scope?",
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
},
{
  question: "Who invented Javascript?",
  answers: [//Question 11
      "Brenden Elch",
      "Hakon Wium Lie",
      "Tim Berners-Lee",
      "Guido van Rossum"
  ],
  correctAnswer: 0,
  wrongAnswer: [2, 1, 3]
},
{
  question: "What does the getAttribute()?",
  answers: [ //Question 12
      "Checks if element node has a specified attribute?",
      "sets the value of an attribute?",
      "gets the value of an attribute?",
      "removes an attribute from an element node?"
  ],
  correctAnswer: 2,
  wrongAnswer: [0, 1, 3]
},
{
  question: "What is the basic difference between JavaScript and Java?",
  answers: [ //Question 13
      "Functions are considered as fields",
      "Java is a compiled language and runs in a Java Virtual Machine, while JavaScript is an interpreted language and is used for creating interactive websites.",
      "Functions are values, and there is no hard distinction between methods and fields",
      "Variables are specific"
  ],
  correctAnswer: 1,
  wrongAnswer: [2, 0, 3]
},
{
  question: "Which of the following scoping type does JavaScript use??",
  answers: [ //Question 14
      "Sequential",
      "Segmental",
      "Lexical",
      "Literal"
  ],
  correctAnswer: 1,
  wrongAnswer: [0, 2, 3]
},
  {
    question: "What is a closure in JavaScript?",
    answers: [ //Question 15
        "A function that has access to its own scope, the outer function's scope, and the global scope",
        "A function that can be stored in a variable",
        "A function that cannot access variables from other functions",
        "A function that can only access its own variables"
    ],
    correctAnswer: 0,
    wrongAnswer: [2, 1, 3] 
  },
  {
    question: "Which of the following is the property that is triggered in response to JS errors?",
    answers: [ //Question 16
        "onclick",
        "onerror",
        "onmessage",
        "onexeption"
    ],
    correctAnswer: 1,
    wrongAnswer: [2, 1, 3]
  },
  {
    question: "Which of the following is not a framework?",
    answers: [ //Question 17
        "JavaScript .NET",
        "JavaScript",
        "CocoaJS",
        "JQuery"
    ],
    correctAnswer: 1,
    wrongAnswer: [2, 1, 3]
},
{
  question: "What is the purpose of the 'this' keyword in JavaScript?",
  answers: [ //Question 18
      "Refers to the previous function",
      "Refers to a specific HTML element",
      "Refers to the current object",
      "Refers to a global variable"
  ],
  correctAnswer: 2,
  wrongAnswer: [0, 1, 3]
},
{
  question: "Why event handlers is needed in JS?",
  answers: [ // Question 19
      "Allows JavaScript code to alter the behaviour of windows",
      "Adds innerHTML page to the code",
      "Change the server location",
      "Performs handling of exceptions and occurrences"
  ],
  correctAnswer: 0,
  wrongAnswer: [2, 1, 3]
},
{
  question: "What is the prototype represents in the following JavaScript code snippet?: function javascript() {}",
  answers: [ // Question 20
      "Not valid",
      "Prototype of a function",
      "Function javascript",
      "A custom constructor"
  ],
  correctAnswer: 3,
  wrongAnswer: [0, 1, 2]
},
{
  question: "What will be the result or type of error if p is not defined in the following JavaScript code snippet?: console.log(p)",
  answers: [ // Question 21
      "Value not found Error",
      "Reference Error",
      "Null",
      "Zero"
  ],
  correctAnswer: 1,
  wrongAnswer: [0, 2, 3]
},
{
  question: "Which of the following methods/operation does javascript use instead of == and !=?",
  answers: [ // Question 22
      "JavaScript uses equalto()",
      "JavaScript uses equals() and notequals() instead",
      "JavaScript uses bitwise checking",
      "javaScriptuses === and !== instead"
  ],
  correctAnswer: 3,
  wrongAnswer: [0, 1, 2]
},
{
  question: "Why JavaScript Engine is needed?",
  answers: [ //Question 23
      "Both Compiling & Interpreting the JavaScript",
      "Parsing the JavaScript",
      "Interpreting the JavaScript",
      "Compiling the JavaScript"
  ],
  correctAnswer: 2,
  wrongAnswer: [0, 1, 3]
},
{
  question: "What is the purpose of the 'this' keyword in JavaScript?",
  answers: [ // Question 24
      "Refers to the previous function",
      "Refers to a specific HTML element",
      "Refers to the current object",
      "Refers to a global variable"
  ],
  correctAnswer: 2,
  wrongAnswer: [0, 1, 3]
},
{
  question: " What is the basic difference between JavaScript and Java?",
  answers: [ //Question 25
      "Functions are considered as fields",
      "Functions are values, and there is no hard distinction between methods and fields",
      "Variables are specific",
      "There is no difference"
  ],
  correctAnswer: 1,
  wrongAnswer: [0, 2, 3]
},
{
  question: "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
  answers: [ //Question 26
      "will work perfectly well on a Windows Machine",
      "will be displayed as JavaScript text on the browser",
      "will throw errors and exceptions",
      "must be restricted to a Unix Machine only"
  ],
  correctAnswer: 0,
  wrongAnswer: [2, 1, 3]
},
{
  question: " Which of the following can be used to call a JavaScript Code Snippet?",
  answers: [ //Question 27
      "Function/Method",
      "Preprocessor",
      "Triggering Event",
      "RMI"
  ],
  correctAnswer: 0,
  wrongAnswer: [2, 1, 3]
},
{
  question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
  answers: [ //Question 28
      "Position",
      "Window",
      "Standard",
      "Location"
  ],
  correctAnswer: 1,
  wrongAnswer: [0, 2, 3]
},
{
  question: " Where is Client-side JavaScript code is embedded within HTML documents?",
  answers: [ //Question 29
      "A URL that uses the special javascript: code",
      "A URL that uses the special javascript: protocol",
      "A URL that uses the special javascript: encoding",
      "A URL that uses the special javascript: stack"
  ],
  correctAnswer: 1,
  wrongAnswer: [0, 2, 3]
},
{
  question: "Arrays in JavaScript are defined by which of the following statements?",
  answers: [ //Question 30
      "It is an ordered list of values",
      "It is an ordered list of objects",
      "It is an ordered list of string",
      "It is an ordered list of functions"
  ],
  correctAnswer: 0,
  wrongAnswer: [2, 1, 3]
},
{
  question: "Among the given statements, which statement defines closures in JavaScript?",
  answers: [ //Question 31
      "JavaScript is a function that is enclosed with references to its inner function scope",
      "JavaScript is a function that is enclosed with references to its lexical environment",
      "JavaScript is a function that is enclosed with the object to its inner function scope",
      "None of the mentioned"
  ],
  correctAnswer: 1,
  wrongAnswer: [0, 2, 3]
}
  ];

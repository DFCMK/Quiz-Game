
let Start = document.getElementById("start-btn");
let next = document.getElementById("next-btn");
let questionBox =  document.getElementById("question-box");
let questionCard = document.getElementById("question");
let answerButtons = document.getElementById("answer-btn");
let results = document.getElementById("reuslt");

let shuffleQuestions, currentQuestionIndex;

 
 /*Start.addEventListener('click', function() {

    this.style.display = "none";
    
    questionBox.classList.remove('hide');
  });*/

  Start.addEventListener("click", startGame);
  next.addEventListener("click", nextCard);

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
        showResults();
    }
}

function showQuestion(question){
    questionCard.innerText = question.question;

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.classList.add("btn");
        button.innerText = answer;

        button.dataset.answer = index;

        button.addEventListener("click", () => checkAnswer(index));

        answerButtons.appendChild("button");
    });
  }

  function resetState(){

    while ( answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    next.classList.add("hide");
  }

  function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correctAnswer;

    if (selectedIndex === correctIndex) {

        results.innerHTML += "Correct!<br>";
    }
    else
    {
        results.innerHTML += "Wrong!<br>";
    }
    currentQuestionIndex++;
    nextCard();

  }

  function selectedAnswer(){}
  
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
},
{
    question: "Which of the following is not a JavaScript data type?",
    answers: [
        "Number",
        "String",
        "Boolean",
        "Float"
    ],
    correctAnswer: 4,
},
{
    question: "What does the 'DOM' stand for in JavaScript?",
    answers: [
        "Document Object Model",
        "Data Object Model",
        "Document Order Model",
        "Document of Manipulation"
    ],
    correctAnswer: 1,
},
{
    question: "How do you define a variable in JavaScript with a global Scope?",
    answers: [
        "let",
        "const",
        "var",
        "int"
    ],
    correctAnswer: 2,
},
{
    question: "Which of the following JavaScript frameworks is used for building user interfaces?",
    answers: [
        "JQuery",
        "Mongoose",
        "Express",
        "React"
    ],
    correctAnswer: 4,
},
{
    question: "What is the purpose of the 'if' statement in JavaScript?",
    answers: [
        "Loop through an array",
        "Declare a function",
        "Make decisions in your code",
        "Create a class"
    ],
    correctAnswer: 1,
},
{
    question: "What method is used to add a new element to the end of an array in JavaScript?",
    answers: [
        "append()",
        "push()",
        "insert()",
        "add()"
    ],
    correctAnswer: 2,
},
{
    question: "Which JavaScript function is used to perform an action after a specific time interval?",
    answers: [
        "setTimer()",
        "delay()",
        "setInterval()",
        "wait"
    ],
    correctAnswer: 3,
},
{
    question: "What is the correct way to write a comment in JavaScript?",
    answers: [
        "//This is a comment",
        "<!--This is a comment-->",
        "++This is a comment++",
        "**This is a comment**"
    ],
    correctAnswer: 1,
},
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            "Refers to the previous function",
            "Refers to a specific HTML element",
            "Refers to the current object",
            "Refers to a global variable"
        ],
        correctAnswer: 3,
}
];
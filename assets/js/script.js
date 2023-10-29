
let Start = document.getElementById('start-btn');
let questionBox =  document.getElementById('question-box');
let shuffeledQuestions, currentQuestionIndex;
 
 /*Start.addEventListener('click', function() {

    this.style.display = "none";
    
    questionBox.classList.remove('hide');
  });*/

  Start.addEventListener("click", startGame);

  function startGame(){
    Start.classList.ass("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionBox.classList.remove("hide");
    nextCard();
  }
  function nextCard(){}
  function selectedAnswer(){}
  
  let questions = [
    {
    question: "What is JavaScript primarily used for?",
    answers: {
        a: " Data analysis",
        b: "Server administration",
        c: "Adding interactivity to websites",
        d: "Video editing"
    },
    correctAnswer: "c"
},
{
    question: "Which of the following is not a JavaScript data type?",
    answers: {
        a: "Number",
        b: "String",
        c: "Boolean",
        d: "Float"
    },
    correctAnswer: "d"
},
{
    question: "What does the 'DOM' stand for in JavaScript?",
    answers: {
        a: "Document Object Model",
        b: "Data Object Model",
        c: "Document Order Model",
        d: "Document of Manipulation"
    },
    correctAnswer: "a"
},
{
    question: "How do you define a variable in JavaScript with a global Scope?",
    answers: {
        a: "let",
        b: "const",
        c: "var",
        d: "int"
    },
    correctAnswer: "b"
},
{
    question: "Which of the following JavaScript frameworks is used for building user interfaces?",
    answers: {
        a: "JQuery",
        b: "Mongoose",
        c: "Express",
        d: "React"
    },
    correctAnswer: "d"
},
{
    question: "What is the purpose of the 'if' statement in JavaScript?",
    answers: {
        a: "Loop through an array",
        b: "Declare a function",
        c: "Make decisions in your code",
        d: "Create a class"
    },
    correctAnswer: "a"
},
{
    question: "What method is used to add a new element to the end of an array in JavaScript?",
    answers: {
        a: "append()",
        b: "push()",
        c: "insert()",
        d: "add()"
    },
    correctAnswer: "b"
},
{
    question: "Which JavaScript function is used to perform an action after a specific time interval?",
    answers: {
        a: "setTimer()",
        b: "delay()",
        c: "setInterval()",
        d: "wait"
    },
    correctAnswer: "c"
},
{
    question: "What is the correct way to write a comment in JavaScript?",
    answers: {
        a: " //This is a comment",
        b: " <!--This is a comment-->",
        c: "++This is a comment++",
        d: "**This is a comment**"
    },
    correctAnswer: "a"
},
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: {
            a: "Refers to the previous function",
            b: "Refers to a specific HTML element",
            c: "Refers to the current object",
            d: "Refers to a global variable"
        },
        correctAnswer: "c"
}
];
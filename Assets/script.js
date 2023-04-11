// Timer information. A constant starting minutes of 10 min. The mintues is tomes 60 for 60 sections by mintues.

// Then we get element by id countdown from the HTML ID

const startMintues= 1;
let time = startMintues * 60;
const countdownEL = document.getElementById('countdown');

setInterval(updateCountDown, 1000);

// making a funtion to countdown the ID

function updateCountDown(){
    const minutes = Math.floor(time / 60); //counting minutes. All the seconds and divide 60 to get the minutes and we use math.floor to retreive lowest number without decimels
    let seconds = time % 60;

    seconds = seconds <10 ? '0' + seconds : seconds; // keeps the seconds counting.
   
    countdownEL.innerHTML = `${minutes}: ${seconds}`;
    time--;
}




// First made a "dictionary" which holds the value of questions. Total 3 Questions

const questions = [
{
    question: "What does HTML Stand for?",
    answers: [
     { text: "HyperText Markup Language", correct : true},
     { text: "HyperText Markups Language", correct : false},
     { text: "HyperText Marking Language", correct : false},
     { text: "HyperText Mass Language", correct : false},


    ]
},

{
  question: "What does CSS Stand for?",
    answers: [
     { text: "Cascading Style S", correct : false},
     { text: "HyperText Markups Language", correct : false},
     { text: "Cascading Style Sheets", correct : true},
     { text: "Cascading Stylisitc Sheets", correct: false},
    ]
},

{
  question: "What does JS Stand for?",
    answers: [
     { text: "Java Scripting", correct : false},
     { text: "Java Science", correct : false},
     { text: "Javascript", correct : true},
     { text: "Java Scripts", correct : false}, 


    ]
}

];
// Adding these 3 html elements to JS

const questionElement = document.getElementById("question");
const  answerButtons = document.getElementById("answer-buttons");
const  nextButton = document.getElementById("next-btn");

// Variables to store question and answer index


let currentQuestionIndex = 0;
let score =0;

function startQuiz() {
  currentQuestionIndex =0;
  score =0;
  nextButton.innerHTML = "Next";
  showQuestion();  // Will display questions
}

function showQuestion() {
  resetState(); //This will reset previous question and answers
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer.text; //calling the answer and text from the first block of code in JS
  button.classList.add("btn");
  answerButtons.appendChild(button); //display the button inside the div
  
  if(answer.correct){ // If answer is correct after selecting answer run this loop.
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer); //selectAnswer is a function.


});

}
function resetState() {
  nextButton.style.display ="none";
  while(answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild); // remove the previous child elements
  }
}

function selectAnswer(e) { //Defining Function
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true"; // Function is saying if correct then it is true

  if(isCorrect) { // If else statement saying that if the selected button is correct print correct, else print incorrect.
    selectedBtn.classList.add("correct");
    score ++; // This will increase score by 1 every time you get an answer right
  }  else{
    selectedBtn.classList.add("incorrect");
  }


    Array.from(answerButtons.children).forEach(button => { // This shows if the button or answer turns green, let the system know it is correct, show the hiddent next button to move forward to the next question.
      // otherwise if wrong, show the correct answer.
        if(button.dataset.correct === "true") {
          button.classList.add ("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display ="block"; //will show the next question
};

function showScore() { // show score at the end of the game!
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Try Again?"
  nextButton.style.display = "block";
};

function handleTheNextButton() {
  currentQuestionIndex++ //increase question index by 1 when we click on next button
  if(currentQuestionIndex < questions.length){
    showQuestion();
  } else{
    showScore(); //define score function
  }
}



nextButton.addEventListener("click", () => {
if(currentQuestionIndex <questions.length) {
    handleTheNextButton(); //empty function need to define to move to the next question
} else{
  startQuiz();
}
} );


startQuiz();  // Call function






























































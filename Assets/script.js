
// First made a "dictionary" which holds the value of questions. Total 3 Questions

const questions = [
  {

    question: "What does HTML Stand for?",
    answers: [
      { text: "Hypertext Markup Language", correct: true},
      { text: "Hyperspeed Markup Language", correct: false},
      { text: "Hypertext Marking Language", correct: false},
      { text: "N/A", correct: false},

    ]
  },
  {
    question: "What does CSS Stand for?",
    answers: [
      { text: "Casanova Style Sheet", correct: false},
      { text: "Cascadding Markup Language", correct: false},
      { text: "Cascadding Style Sheet", correct: true},
      { text: "Castle Style Sheet", correct: false},

    ]
  },
  {
    question: "What is WebAPI?",
    answers: [
      { text: "Something you can Google", correct: false},
      { text: "Something on the web in your browser", correct: false},
      { text: "API of Websites", correct: false},
      { text: "an application programming interface for either a web server or a web browser.", correct: true},

    ]
  }
];

const questionElement= document.getElementById("question"); // Got elements from HTML for the ID of question
const answerButtons= document.getElementById("answer-buttons"); // Got elements from HTML for the ID of answsers
const nextbutton= document.getElementById("next-btn"); // Got elements from HTML for the ID of question

let currentQuestionIndex = 0;
let score = 0;

function starQuiz() {    // created a funtiont to make the starting index 0 for the questions so when clicking on next button it will move on the next set of questions and answers
  currentQuestionIndex=0; // WIll reset the questions and score to 0
  score = 0;
  nextbutton.innerHTML = "Next"; //replay button 
  showQuestion(); //Will display the questions
}

function showQuestion() {    // Created a funcation for show question where the first index will be question 1. Index will be 0
  resetState(); //rest previous question
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1; // increment Number 1 Number 2 etc
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Adding element to HTML


  currentQuestion.answers.forEach(answer => {                       // Display the answers
      const button = document.createElement("button"); // it will go to the answers and get and display the text in button. Create a button tag called showButton
      button.innerHTML = answer.text;
     button.classList.add("btn"); // Need to add a class name called btn in the button. 
     answerButtons.appendChild(button); // It needs to be displayed in the div buttons so we need to append the child to the parent ID

  });   
} 

function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }

}
 
starQuiz(); // calling the function
 






















//   Timer information. A constant starting minutes of 10 min. The mintues is tomes 60 for 60 sections by mintues.

// Then we get element by id countdown from the HTML ID

// const startMintues= 1;
// let time = startMintues * 60;
// const countdownEL = document.getElementById('countdown');

// setInterval(updateCountDown, 1000);

// // making a funtion to countdown the ID

// function updateCountDown(){
//     const minutes = Math.floor(time / 60); //counting minutes. All the seconds and divide 60 to get the minutes and we use math.floor to retreive lowest number without decimels
//     let seconds = time % 60;

//     seconds = seconds <10 ? '0' + seconds : seconds; // keeps the seconds counting.
   
//     countdownEL.innerHTML = `${minutes}: ${seconds}`;
//     time--;
// }





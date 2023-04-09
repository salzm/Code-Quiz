// First made a "dictionary" which holds the value of questions. Total 3 Questions

const questions = {
    question1: "Number #1: What does HTML Stand for?",
  };

  document.getElementById("Question1").innerHTML = questions.question1; // added our question and then used getElmentbyID to refrence the class in HTML file to assign the value of question1

  const questions2 = {
    question: "Number #2: What Does CSS Mean",
  };

  document.getElementById("Question2").innerHTML = questions2.question;

  const questions3 = {
    question: "Number #3: What is Javascript?",
  };

  document.getElementById("Question3").innerHTML = questions3.question;



//   Timer information. A constant starting minutes of 10 min. The mintues is tomes 60 for 60 sections by mintues.

// Then we get element by id countdown from the HTML ID


const startMintues= 1;
let time = startMintues * 60;
const countdownEL = document.getElementById('countdown');

setInterval(updateCountDown, 1000);

// making a funtion to countdown the ID

function updateCountDown(){
    const minutes = Math.floor(time / 60); //counting minutes. All the seconds and divide 60 to get the minutes and we use math.floor to retreive lowest number without decimels
    let seconds = time % 60;
   
                              //stop timer at 0??

    countdownEL.innerHTML = `${minutes}: ${seconds}`;
    time--;
}




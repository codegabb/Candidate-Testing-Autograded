 const input = require('readline-sync');
 
let candidateName = " "; //Define candidateName as an empty string

//TODO: Variables for Part 2

let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride"
let candidateAnswer = " "


let questions = [
"Who was the first American woman in space? ",
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? ",
];

let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3",
];

let candidateAnswers = []; // declare as an array

function askForName() {
  candidateName = input.question("What is your name? "); // TODO 1.1b: Ask for candidate's name //
}

function askQuestion() {
  for (let i=0; i < questions.length; i++) {//asks each question, goes one array at a time
    candidateAnswers[i] = input.question(`${questions[i]} ` ); //stores each input as candidateAnswer
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      console.log("Your answer is correct!");
  } else {
    console.log(`That is wrong. Your answer is , ${candidateAnswers[i]} `)//displays their input line by line
    console.log(`The correct answer is , ${correctAnswers[i]} `);//diplays correct answer, goes line by line
  } 
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //usimg the question variable, display question and prompt answer"
  }
}

function gradeQuiz(candidateAnswers) {
  let score = 0;

  for (let i = 0; i < candidateAnswers.length; i++){
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      score += 1;
  }
}
  
  //TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly

  let grade = (score/5)*100;  //TODO 3.2 use this variable to calculate the candidates score.
    return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hi " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers); {
    if (gradeQuiz(candidateAnswers) >= 80) {
      console.log(`your grade is ${gradeQuiz(candidateAnswers)} %, you passed!`);
    } else {
      console.log(`your grade is ${gradeQuiz(candidateAnswers)} %, you failed`)
    }
  
}
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
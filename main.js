import { fetchQuestions } from "./qapi.js";
import { renderQuestion, showScore } from "./qui.js";

let questions = [];
let currentIndex = 0;
let score = 0;

async function startQuiz() {
  questions = await fetchQuestions();
  currentIndex = 0;
  score = 0;
  renderQuestion(questions[currentIndex], currentIndex);
  showScore(score, questions.length);
}

// Next question logic
document.getElementById("nextBtn").addEventListener("click", () => {
  const selected = document.querySelector(".option-btn[disabled][style*='green']");
  if (selected) score++;

  currentIndex++;
  if (currentIndex < questions.length) {
    renderQuestion(questions[currentIndex], currentIndex);
    showScore(score, questions.length);
  } else {
    document.getElementById("quiz").innerHTML = "<h2>Quiz Completed!</h2>";
    showScore(score, questions.length);
    document.getElementById("nextBtn").style.display = "none";
  }
});

startQuiz();

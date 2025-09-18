// UI module - handle DOM updates
export function renderQuestion(questionObj, questionIndex) {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  const question = document.createElement("h3");
  question.textContent = `Q${questionIndex + 1}: ${decodeHTML(questionObj.question)}`;
  quizDiv.appendChild(question);

  // Shuffle options
  let options = [...questionObj.incorrect_answers, questionObj.correct_answer];
  options = shuffle(options);

  options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = decodeHTML(option);
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(option, questionObj.correct_answer);
    quizDiv.appendChild(btn);
  });
}

// Show score
export function showScore(score, total) {
  document.getElementById("score").textContent = `Score: ${score}/${total}`;
}

// Helper functions
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Answer check logic
function checkAnswer(selected, correct) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => {
    if (btn.textContent === decodeHTML(correct)) {
      btn.style.background = "green";
    } else if (btn.textContent === selected) {
      btn.style.background = "red";
    }
    btn.disabled = true;
  });
}

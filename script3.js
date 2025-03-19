const toggle = document.getElementById("toggle");
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

function closeNavbar(e) {
  if (
    document.body.classList.contains("show-nav") &&
    e.target !== toggle &&
    !toggle.contains(e.target) &&
    e.target !== navbar &&
    !navbar.contains(e.target)
  ) {
    document.body.classList.toggle("show-nav");
    document.body.removeEventListener("click", closeNavbar);
  } else if (!document.body.classList.contains("show-nav")) {
    document.body.removeEventListener("click", closeNavbar);
  }
}

// Menu Slider
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
  document.body.addEventListener("click", closeNavbar);
});

const questions = [
  {
      question: "Have you felt sad, down, or depressed all day, nearly every day?",
      answers: ["Yes", "Sometimes", "Rarely", "No"],
      scores: [3, 2, 1, 0]
  },
  {
      question: "Have you lost interest or pleasure in things you usually enjoy?",
      answers: ["Yes", "Sometimes", "Rarely", "No"],
      scores: [3, 2, 1, 0]
  },
  {
      question: "Have you had issues with appetite?",
      answers: ["Yes", "Sometimes", "Rarely", "No"],
      scores: [3, 2, 1, 0]
  },
  {
      question: "Have you had trouble sleeping or been sleeping too much?",
      answers: ["Yes", "Sometimes", "Rarely", "No"],
      scores: [3, 2, 1, 0]
  },
  {
      question: "Have you felt tired or low on energy most of the time?",
      answers: ["Yes", "Sometimes", "Rarely", "No"],
      scores: [3, 2, 1, 0]
  },
  {
      question: "Have you felt worthless or guilty almost every day?",
      answers: ["Yes", "Sometimes", "Rarely", "No"],
      scores: [3, 2, 1, 0]
  },
  {
      question: "Have you had difficulty concentrating or making decisions?",
      answers: ["Yes", "Sometimes", "Rarely", "No"],
      scores: [3, 2, 1, 0]
  },
  {
      question: "Have you had thoughts of death or harming yourself?",
      answers: ["Yes", "Sometimes", "Rarely", "No"],
      scores: [3, 2, 1, 0]
  },
  {
    question: "Have you lost weight without trying to? (More than 1 kg in a week)",
    answers: ["Yes", "Sometimes", "Rarely", "No"],
    scores: [3, 2, 1, 0]
},
  {
    question: "Have you been speaking or moving slower than usual?",
    answers: ["Yes", "Sometimes", "Rarely", "No"],
    scores: [3, 2, 1, 0]
},
{
  question: "Do you have trouble focusing or completing tasks at work or school?",
  answers: ["Yes", "Sometimes", "Rarely", "No"],
  scores: [3, 2, 1, 0]
},
{
  question: "Do you find it hard to control your thoughts, especially negative ones?",
  answers: ["Yes", "Sometimes", "Rarely", "No"],
  scores: [3, 2, 1, 0]
},
{
  question: "Do you feel like your emotions are unpredictable or difficult to manage?",
  answers: ["Yes", "Sometimes", "Rarely", "No"],
  scores: [3, 2, 1, 0]
},
{
  question: "Have you found it difficult to move on from a toxic or unhealthy relationship?",
  answers: ["Yes", "Sometimes", "Rarely", "No"],
  scores: [3, 2, 1, 0]
},
{
  question: "Have you experienced a relationship that negatively impacted your mental health?",
  answers: ["Yes", "Sometimes", "Rarely", "No"],
  scores: [3, 2, 1, 0]
},
{
  question: "Have these problems affected your life or activities significantly?",
  answers: ["Yes", "Sometimes", "Rarely", "No"],
  scores: [3, 2, 1, 0]
}
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const answersElement = document.getElementById('answers');
  const progressElement = document.getElementById('progress');

  const current = questions[currentQuestion];

  questionElement.innerText = current.question;
  answersElement.innerHTML = '';

  current.answers.forEach((answer, index) => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="answer" value="${current.scores[index]}"> ${answer}`;
      answersElement.appendChild(label);
  });

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  progressElement.style.width = progressPercentage + '%';
}

function nextQuestion() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
      score += parseInt(selectedAnswer.value);
      currentQuestion++;
      if (currentQuestion < questions.length) {
          loadQuestion();
      } else {
          showResults();
      }
  } else {
      alert("Please select an answer before proceeding.");
  }
}

function showResults() {
  const resultsElement = document.getElementById('results');
  const quizForm = document.getElementById('quizForm');

  quizForm.style.display = 'none';
  const maxScore = questions.length * 3;

  let percentage = (score / maxScore) * 100;
  let resultMessage = '';

  if (percentage >= 70) {
      resultMessage = `<h3>-You are experiencing a high level of psychological distress. Score: ${percentage.toFixed(2)}%</h3>`;
      resultMessage += `<p><a href=" https://hany-habiba.github.io/Calmora2/" target="_blank">If you want soultion, Visit our website:Calmora</a></p>`;
  } else if (percentage >= 40) {
      resultMessage = `<h3>-You may be experiencing moderate mental health issues. Score: ${percentage.toFixed(2)}%`;
      resultMessage += `<p><a href=" https://hany-habiba.github.io/Calmora2/" target="_blank">If you want soultion, Visit our website:Calmora</a></p>`;
  } else {
      resultMessage = `<h3>-You have low signs of psychological distress. Score: ${percentage.toFixed(2)}%</h3>`;
      resultMessage += `<p><a href=" https://hany-habiba.github.io/Calmora2/" target="_blank">If you want soultion, Visit our website:Calmora</a></p>`;
  }

  resultsElement.innerHTML = `<h3>Test Results:</h3><p>${resultMessage}</p>`;
}

loadQuestion();
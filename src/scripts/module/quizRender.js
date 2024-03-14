import { quizCont } from "./blockCreation";

let wordTemplate;
let hint;
let attempts;

function getWordTemplate(word) {
  const wordCont = document.createElement("div");

  wordCont.classList.add("word");

  for (let i = 0; i < word.length; i += 1) {
    const letter = document.createElement("span");
    letter.classList.add("letter");
    wordCont.append(letter);
  }
  return wordCont;
}

function getHint(text) {
  const hintElem = document.createElement("p");
  hintElem.textContent = text;
  hintElem.classList.add("question");

  return hintElem;
}

function getAttempt() {
  const attemptCont = document.createElement("div");
  attemptCont.classList.add("attempt");
  const attempt = document.createElement("p");
  attempt.textContent = "Неправильных попыток:";
  attemptCont.append(attempt);

  const attemptCount = document.createElement("span");
  attemptCount.textContent = "0/6";
  attemptCont.append(attemptCount);

  return attemptCont;
}

function render(element, container = document.querySelector(".cont")) {
  container.append(element);
}

function renderQuiz(data) {
  wordTemplate = getWordTemplate(data.answer);
  hint = getHint(data.question);
  attempts = getAttempt();
  render(wordTemplate, quizCont);
  render(hint, quizCont);
  render(attempts, quizCont);
}

function removeQuiz() {
  wordTemplate.remove();
  hint.remove();
  attempts.remove();
}

function getRestartBtn() {
  const btn = document.createElement("button");
  btn.classList.add("button", "button_more");
  btn.textContent = "Играть еще";

  return btn;
}

export { renderQuiz, removeQuiz, getRestartBtn };

import { manikinPosition, alphabet, questions } from "../utils/constants";
import { openPopup } from "./popup";
import { keyboard, quizCont } from "./blockCreation";
import { getRandomNumber } from "../utils/utils";

let answerLetters = [];
let incorrectNumber;
let currentData;
let usedLetters;
let gallowsElem;

async function getAnswerArray() {
  let rand;
  do {
    rand = getRandomNumber(questions);
  } while (rand === +localStorage.getItem("ds-qs_id"));

  localStorage.setItem("ds-qs_id", `${rand}`);
  return questions.filter((i) => i.id === rand)[0];
}

function updateWord(data, gallows) {
  for (let i = 0; i < data.answer.length; i += 1) {
    answerLetters.push(" ");
  }
  incorrectNumber = 0;
  currentData = data;
  usedLetters = "";
  gallowsElem = gallows;
  keyboard.querySelectorAll("button").forEach((key) => {
    key.disabled = false;
    key.classList.remove("correct", "incorrect");
  });
}

function keyboardListener(e) {
  if (e.target.tagName !== "BUTTON") return;

  e.target.disabled = true;
  checkLetters(currentData.answer, e.target.textContent, e.target);
}

function typingListener(e) {
  const serviceKeys = ["Meta", "Tab", "Alt", "Enter"];
  if (serviceKeys.includes(e.key)) return;

  if (!alphabet.includes(e.key)) {
    openPopup({
      text: ["Пожалуйста, используйте клавиатуру на русском языке"],
      button: {
        text: "Закрыть",
        className: "button_close",
      },
    });
  } else if (!usedLetters.includes(e.key)) {
    const keyboardKeys = keyboard.querySelectorAll("button");

    checkLetters(currentData.answer, e.key);
    keyboardKeys.forEach((key) => {
      if (key.textContent === e.key) key.disabled = true;
    });
    usedLetters += e.key;
  }
}

function checkLetters(answer, letterValue) {
  const letter = letterValue.toLowerCase();
  if (answer.includes(letter)) {
    for (let i = 0; i < answer.length; i += 1) {
      if (answer[i] === letter) answerLetters[i] = letter;
      // letterElem.classList.add("correct");
    }
    keyboard.querySelectorAll("button").forEach((key) => {
      if (key.textContent === letter.toUpperCase()) {
        key.classList.add("correct");
      }
    });
    renderLetter();
  } else {
    keyboard.querySelectorAll("button").forEach((key) => {
      if (key.textContent === letter.toUpperCase()) {
        key.classList.add("incorrect");
      }
    });
    incorrectNumber += 1;
    // letterElem.classList.add("incorrect");
    renderManPart();
    changeAttempts();
  }

  if (incorrectNumber === 6) {
    answerLetters = [];
    openPopup({
      text: ["О нет! Вы проиграли", `Правильный ответ: ${answer}`],
      button: {
        text: "Играть еще",
        className: "button_more",
      },
    });
  } else if (!answerLetters.includes(" ")) {
    openPopup({
      text: ["Поздравляю! Вы выиграли", `Правильный ответ: ${answer}`],
      button: {
        text: "Играть еще",
        className: "button_more",
      },
    });
    answerLetters = [];
  }
}

function renderLetter() {
  const letterElems = document.querySelectorAll(".letter");

  letterElems.forEach((letter, index) => {
    letter.textContent = answerLetters[index].toUpperCase();
    if (letter.textContent !== " ") letter.style.borderBottom = "none";
  });
}

function renderManPart() {
  const pic = document.createElement("img");
  pic.src = manikinPosition[incorrectNumber].url;
  pic.style.position = "absolute";
  pic.style.top = manikinPosition[incorrectNumber].top;
  pic.style.right = manikinPosition[incorrectNumber].right;
  pic.classList.add(manikinPosition[incorrectNumber].className);
  gallowsElem.append(pic);
}

function changeAttempts() {
  quizCont.querySelector(".attempt span").textContent = `${incorrectNumber}/6`;
}

export { keyboardListener, updateWord, typingListener, getAnswerArray };

import {
  keyboardListener,
  updateWord,
  typingListener,
  getAnswerArray,
} from "./module/quiz";
import { closePopup } from "./module/popup";
import {
  cont,
  keyboard,
  popup,
  popupBtn,
  overlay,
  getGallows,
  renderStatic,
} from "./module/blockCreation";
import { renderQuiz, removeQuiz, getRestartBtn } from "./module/quizRender";
import "../style/style.css";

let gallows = getGallows();
let restartBtn;

renderStatic();
cont.prepend(gallows);

getAnswerArray().then((data) => {
  // eslint-disable-next-line no-console
  console.log(`Правильный ответ: ${data.answer}`);

  renderQuiz(data);
  updateWord(data, gallows);

  keyboard.addEventListener("click", (e) => keyboardListener(e));
  document.addEventListener("keydown", (e) => typingListener(e));
});

popupBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("button_more")) setNewGame();
  closePopup();
});

overlay.addEventListener("click", () => {
  closePopup();
  restartBtn = getRestartBtn();
  gallows.after(restartBtn);
  document.querySelector(".button_more")?.addEventListener("click", setNewGame);
});

document.addEventListener("keydown", (e) => {
  if (!(popup.classList.contains("popup_showed") && e.key === "Enter")) return;

  if (popupBtn.classList.contains("button_more")) setNewGame();
  closePopup();
});

function setNewGame() {
  gallows.remove();
  gallows = getGallows();
  cont.prepend(gallows);
  removeQuiz();
  restartBtn.remove();

  getAnswerArray().then((data) => {
    // eslint-disable-next-line no-console
    console.log(`Правильный ответ: ${data.answer}`);
    renderQuiz(data);
    updateWord(data, gallows);
  });
}

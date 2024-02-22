import {keyboardListener, updateWord, typingListener, getAnswerArray, isGameOver } from './module/quiz';
import {closePopup} from "./module/popup";
import {cont, keyboard, popup, popupBtn, getGallows, renderStatic} from "./module/blockCreation"
import { renderQuiz, removeQuiz } from "./module/quizRender"
import './../style/style.css'

let gallows = getGallows();

renderStatic();
cont.prepend(gallows);

getAnswerArray()
    .then((data) => {
        console.log(`Правильный ответ: ${data.answer}`);

        renderQuiz(data);
        updateWord(data, gallows);

        keyboard.addEventListener('click', (e) => keyboardListener(e))
        document.addEventListener('keydown', (e) => typingListener(e))
    })

popupBtn.addEventListener('click', () => {
    if (isGameOver) setNewGame()
    closePopup();
})

document.addEventListener('keydown', function (e) {
    if (!(popup.classList.contains('popup_showed') && e.key === 'Enter')) return

    if (popupBtn.classList.contains('button_more') && isGameOver) setNewGame()
    closePopup()
})

function setNewGame() {
    gallows.remove();
    gallows = getGallows();
    cont.prepend(gallows);
    removeQuiz();

    keyboard.querySelectorAll('button').forEach(key => key.disabled = false);

    getAnswerArray()
        .then((data) => {
            console.log(`Правильный ответ: ${data.answer}`)
            renderQuiz(data);
            updateWord(data, gallows);
        })
}

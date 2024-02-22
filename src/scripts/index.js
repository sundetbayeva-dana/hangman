import {keyboardListener, updateWord, typingListener, getAnswerArray, isGameOver } from './module/quiz';
import {closePopup} from "./module/popup";
import {cont, keyboard, getGallows, renderStatic} from "./module/blockCreation"
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

document.querySelector('.button').addEventListener('click', (e) => {
    closePopup();
    if (isGameOver) {
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
})

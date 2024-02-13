import {keyboardListener, updateWord, typingListener, getAnswerArray } from './module/quiz.js';
import {closePopup} from "./module/popup.js";
import {cont, keyboard, getGallows, renderStatic} from "./module/blockCreation.js"
import { renderQuiz, removeQuiz } from "./module/quizRender.js"

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
    if (e.target.classList.contains('button_more')) {
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

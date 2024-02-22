import {quizCont} from "./blockCreation";

let wordTemplate;
let hint;
let attempts;

function getWordTemplate(word) {
    const wordCont = document.createElement('div');

    wordCont.classList.add('word');

    for (let i = 0; i < word.length; i ++) {
        const letter = document.createElement('div');
        letter.classList.add('letter');
        letter.style.borderBottom = '1px solid teal';
        wordCont.append(letter);
    }
    return wordCont;
}

function getHint(text) {

    const hint = document.createElement('p');
    hint.textContent = text;

    return hint;
}

function getAttempt() {
    const attempt = document.createElement('span');
    attempt.textContent = `Неправильных попыток: 0/6`;

    return attempt;
}

function render(element, container = document.querySelector('.cont')) {
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
    wordTemplate.remove()
    hint.remove()
    attempts.remove()
}

export {renderQuiz, removeQuiz }

import {manikinPosition, alphabet, questions} from "../utils/constants";
import {openPopup} from "./popup";
import {keyboard, quizCont} from "./blockCreation";
import {getRandomNumber} from "../utils/utils"

let answerLetters = [], incorrectNumber, currentData, usedLetters;
let gallowsElem;
let isGameOver = false;

async function getAnswerArray() {

    let rand = getRandomNumber(questions)

    while (rand === +localStorage.getItem('ds-qs_id')) {
        rand = getRandomNumber(questions)
    }

    localStorage.setItem('ds-qs_id', `${rand}`);
    return (questions.filter(i => i.id === rand))[0];
}

function updateWord(data, gallows) {
    for (let i = 0; i < data.answer.length; i ++) {
        answerLetters.push(' ');
    }
    incorrectNumber = 0;
    currentData = data;
    usedLetters = '';
    gallowsElem = gallows;
}

function keyboardListener(e) {

    if (e.target.tagName !== 'BUTTON') return

    e.target.disabled = true

    checkLetters(currentData.answer, e.target.textContent);
}

function typingListener(e) {

    const serviceKeys = ['Meta', 'Tab', 'Alt']
    if (serviceKeys.includes(e.key)) return

    if (!alphabet.includes(e.key)) {
        openPopup({
            text: ['Пожалуйста, используйте клавиатуру на русском языке'],
            button: {
                text: 'Закрыть',
                className: 'button_close'
            }
        });
    } else if(!usedLetters.includes(e.key)) {
        const keyboardKeys = keyboard.querySelectorAll('button');

        checkLetters(currentData.answer, e.key);
        keyboardKeys.forEach(key => {
            if (key.textContent === e.key) key.disabled = true
        })
        usedLetters += e.key
    }
}

function checkLetters(answer, letter) {

    if (answer.includes(letter)) {
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === letter) answerLetters[i] = letter;
        }
        renderLetter()
    } else {
        incorrectNumber += 1;
        renderManPart();
        changeAttempts();
    }

    if (incorrectNumber === 6) {
        answerLetters = [];
        openPopup({
            text: ['О нет! Вы проиграли', `Правильный ответ: ${answer}`],
            button: {
                text: 'Играть еще',
                className: 'button_more'
            }
        });
        isGameOver = true

    } else if(!answerLetters.includes(' ')) {
        openPopup({
            text: ['Поздравляю! Вы выиграли', `Правильный ответ: ${answer}`],
            button: {
                text: 'Играть еще',
                className: 'button_more'
            }
        });
        answerLetters = [];
        isGameOver = true
    }

}

function renderLetter() {
    const letterElems = document.querySelectorAll('.letter');

    letterElems.forEach((letter, index) => {
        letter.textContent = answerLetters[index]
        if (letter.textContent !== ' ') letter.style.borderBottom = 'none'
    });
}

function renderManPart() {

    const pic = document.createElement('img');
    pic.src = manikinPosition[incorrectNumber].url;
    pic.style.position = 'absolute';
    pic.style.top = manikinPosition[incorrectNumber].top;
    pic.style.right = manikinPosition[incorrectNumber].right;
    pic.classList.add(manikinPosition[incorrectNumber].className)
    gallowsElem.append(pic);
}

function changeAttempts() {
    quizCont.querySelector('span').textContent = `Неправильных попыток: ${incorrectNumber}/6`;
}

export { keyboardListener, updateWord, typingListener, getAnswerArray, isGameOver }

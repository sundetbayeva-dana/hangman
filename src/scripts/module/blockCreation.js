import {alphabet} from "../utils/constants";
import {render} from "../utils/utils"
import gallowsImg from './../../assets/images/gallows.png';

const body = document.querySelector('body');
const cont = getContElem();
const quizCont = getQuizCont();
const popup = getPopup();
const overlay = getOverlay();
const keyboard = getKeyboard();

function getContElem() {
    const cont = document.createElement('div');
    cont.classList.add('cont');

    return cont;
}

function getGallows() {
    const gallows = document.createElement('div');
    gallows.classList.add('gallows');

    const gallowsImgEl = document.createElement('img');
    gallowsImgEl.classList.add('gallows__img');
    gallowsImgEl.src = gallowsImg;
    gallows.prepend(gallowsImgEl);

    return gallows;
}

function getQuizCont() {
    const cont = document.createElement('div');
    cont.classList.add('quiz');

    return cont;
}

function getPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup__content');
    popup.prepend(popupContent);

    const textCont = document.createElement('div');
    textCont.classList.add('text__cont');
    popupContent.append(textCont);

    const button = document.createElement('button');
    button.classList.add('button');
    popupContent.append(button);

    return popup;
}

function getOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    return overlay;
}

function getKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    for (let i = 0; i < alphabet.length; i++) {
        const letterCont = document.createElement('button');
        letterCont.textContent = alphabet[i];
        keyboard.append(letterCont);
    }

    return keyboard;
}

function renderStatic() {
    render(cont, body)
    render(quizCont)
    quizCont.prepend(keyboard);
    render(popup, body)
    render(overlay, body)
}

export { cont, quizCont, keyboard, popup, overlay, getGallows, renderStatic }

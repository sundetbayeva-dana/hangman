import {popup, overlay} from "./blockCreation.js"

let popupContentElem, textElem, popupTextContElem, buttonElem;

function openPopup(config) {

    popupContentElem = popup.querySelector('.popup__content');
    popupTextContElem = popup.querySelector('.text__cont');
    buttonElem = popup.querySelector('.button');

    popup.classList.add('popup_showed');
    overlay.classList.add('overlay_showed');

    renderText(config.text);
    changeButton(config.button);
}

function closePopup() {
    popup.classList.remove('popup_showed');
    overlay.classList.remove('overlay_showed');

    while (popupTextContElem.firstChild) {
        popupTextContElem.removeChild(popupTextContElem.firstChild);
    }

    buttonElem.textContent = '';

}

function renderText(textArray) {
    textArray.forEach((item) => {

        textElem = document.createElement('p');
        textElem.classList.add('text');
        textElem.textContent = item;
        popupTextContElem.append(textElem);
    })
}

function changeButton(button) {
    buttonElem.textContent = button.text;
    buttonElem.classList.add(button.className);
}

export {openPopup, closePopup}

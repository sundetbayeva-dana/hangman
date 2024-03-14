import { alphabet } from "../utils/constants";
import { render } from "../utils/utils";
import gallowsImg from "../../assets/images/gallows.png";

const body = document.querySelector("body");
const cont = getContElem();
const quizCont = getQuizCont();
const popupBtn = getPopupBtn();
const popup = getPopup();
const overlay = getOverlay();
const keyboard = getKeyboard();

function getContElem() {
  const contElem = document.createElement("div");
  contElem.classList.add("cont");

  return contElem;
}

function getGallows() {
  const gallowsElem = document.createElement("div");
  gallowsElem.classList.add("gallows");

  const gallowsImgEl = document.createElement("img");
  gallowsImgEl.classList.add("gallows__img");
  gallowsImgEl.src = gallowsImg;
  gallowsElem.prepend(gallowsImgEl);

  return gallowsElem;
}

function getQuizCont() {
  const quizContElem = document.createElement("div");
  quizContElem.classList.add("quiz");

  return quizContElem;
}

function getPopupBtn() {
  const button = document.createElement("button");
  button.classList.add("button");

  return button;
}

function getPopup() {
  const popupElem = document.createElement("div");
  popupElem.classList.add("popup");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup__content");
  popupElem.prepend(popupContent);

  const textCont = document.createElement("div");
  textCont.classList.add("text__cont");
  popupContent.append(textCont);

  popupContent.append(popupBtn);

  return popupElem;
}

function getOverlay() {
  const overlayElem = document.createElement("div");
  overlayElem.classList.add("overlay");

  return overlayElem;
}

function getKeyboard() {
  const keyboardElem = document.createElement("div");
  keyboardElem.classList.add("keyboard");

  for (let i = 0; i < alphabet.length; i += 1) {
    const letterCont = document.createElement("button");
    letterCont.textContent = alphabet[i].toUpperCase();
    letterCont.classList.add("keyboard__btn");
    keyboardElem.append(letterCont);
  }

  return keyboardElem;
}

function renderStatic() {
  render(cont, body);
  render(quizCont);
  quizCont.prepend(keyboard);
  render(popup, body);
  render(overlay, body);
}

export {
  cont,
  quizCont,
  keyboard,
  popup,
  popupBtn,
  overlay,
  getGallows,
  renderStatic,
};

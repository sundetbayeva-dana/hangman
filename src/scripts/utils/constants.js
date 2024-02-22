import headImg from "./../../assets/images/head.png";
import bodyImg from "./../../assets/images/body.png";
import handOneImg from "./../../assets/images/hand-one.png";
import handTwoImg from "./../../assets/images/hand-two.png";
import legOneImg from "./../../assets/images/leg-one.png";
import legTwoImg from "./../../assets/images/leg-two.png";

let alphabet = '';
for (let i = 1072; i <= 1103; i++) {
  alphabet += String.fromCodePoint(i);
}

const questions = [
  {
    id: 1,
    question: "Какая самая маленькая страна в мире по численности населения?",
    answer: "ватикан",
  },
  {
    id: 2,
    question: "Какой металл был открыт Гансом Кристианом Эрстедом в 1825 году?",
    answer: "алюминий"
  },
  {
    id: 3,
    question: "В каком фильме Хью Джекман сыграл фокусника, соперника персонажа, которого сыграл Кристиан Бэйл?",
    answer: "престиж"
  },
  {
    id: 4,
    question: "Какую спортивную игру изобрел Джеймс Нейсмит в 1891 году?",
    answer: "баскетбол"
  },
  {
    id: 5,
    question: "В 1930 году Альберту Эйнштейну и его коллеге был выдан патент США 1781541. Для чего он был?",
    answer: "холодильник"
  },
  {
    id: 6,
    question: "Как зовут Лютоволка Джона Сноу?",
    answer: "призрак"
  },
  {
    id: 7,
    question: "Энтомология» - это изучение каких животных?",
    answer: "насекомые"
  },
  {
    id: 8,
    question: "У какого животного язык самый длинный по отношению к длине тела?",
    answer: "хамелеон"
  },
  {
    id: 9,
    question: "Граффити происходит от итальянского слова «граффиато», что означает что?",
    answer: "царапины"
  },
  {
    id: 10,
    question: "Какой элемент составляет 92% солнца? ",
    answer: "водород"
  }
];

const manikinPosition = {
  1 : {
    url: headImg,
    className: "head"
  },
  2 : {
    url: bodyImg,
    className: "body"
  },
  3 : {
    url: handOneImg,
    className: "hand-one"
  },
  4 : {
    url: handTwoImg,
    className: "hand-two"
  },
  5 : {
    url: legOneImg,
    className: "leg-one"
  },
  6 : {
    url: legTwoImg,
    className: "leg-two"
  }
}

export {questions, manikinPosition, alphabet}

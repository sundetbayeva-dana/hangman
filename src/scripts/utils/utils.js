function getRandomNumber(data) {
  return Math.floor(1 + Math.random() * (data.length));
}

function render(element, container = document.querySelector('.cont')) {
  container.append(element);
}

export { getRandomNumber, render };

function showMessage(message) {
  console.log(message);
}

function changeBackgroundColor(color) {
  const head = document.querySelector(".header__main");
  head.style.backgroundColor = color;
}

function toggleVisibility(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = "none";
  }
}

function changeH1Text() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmTerm = urlParams.get("utm_term");
  if (utmTerm) {
    const h1Element = document.querySelector(".super");
    if (h1Element) {
      h1Element.textContent = utmTerm;
    }
  }
}

function logCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");
  console.log(`${hours}:${minutes}:${seconds}`);
}

function resetBackgroundColor() {
  const head = document.querySelector(".header__main");
  head.style.backgroundColor = "white";
}

showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener("DOMContentLoaded", () => {
  resetBackgroundColor();
  changeBackgroundColor("lightblue");
  toggleVisibility(".main__title");
  changeH1Text();
});

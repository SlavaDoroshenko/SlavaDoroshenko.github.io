//1
let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

alert(`Привет, ${name}! Вам ${age} лет.`);
console.log(`Привет, ${name}! Вам ${age} лет.`);

//2
let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

alert(`Привет, ${name}! Вам ${age} лет.`);
console.log(`Привет, ${name}! Вам ${age} лет.`);

if (age >= 18) {
  alert("Вы совершеннолетний");
} else {
  alert("Вы несовершеннолетний");
}

//3
let randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = prompt("Угадайте число от 1 до 10:");

if (userGuess == randomNumber) {
  alert("Поздравляем! Вы угадали число!");
} else {
  if (userGuess < 5) {
    alert("Ваше число меньше 5.");
  } else {
    alert("Ваше число больше или равно 5.");
  }
}

//4
const correctPassword = "12345";

let userPassword = prompt("Введите пароль:");

if (userPassword === "") {
  alert("Пароль не может быть пустым.");
} else if (userPassword === correctPassword) {
  alert("Доступ разрешен");
} else {
  alert("Доступ запрещен");
}

//5
let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

let result;
if (operator === "+") {
  result = number1 + number2;
} else if (operator === "-") {
  result = number1 - number2;
} else if (operator === "*") {
  result = number1 * number2;
} else if (operator === "/") {
  result = number1 / number2;
} else {
  alert("Неверный оператор");
}

if (result !== undefined) {
  alert(`Результат: ${result}`);
}

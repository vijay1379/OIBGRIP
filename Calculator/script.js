const input = document.getElementById("input");

function appendToScreen(value) {
  input.value += value;
}

function clearScreen() {
  input.value = "";
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  const inputString = input.value;
  const operators = inputString.match(/[+\-*/]/g);
  const numbers = inputString.split(/[+\-*/]/g).map(Number);
  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const number = numbers[i + 1];
    if (operator === "+") {
      result += number;
    } else if (operator === "-") {
      result -= number;
    } else if (operator === "*") {
      result *= number;
    } else if (operator === "/") {
      result /= number;
    }
  }
  input.value = result;
}

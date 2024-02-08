let result = document.getElementById("result");

function appendValue(value) {
  result.value += value;
}

function clearScreen() {
  result.value = "";
}

function performOperation(operation) {
  result.value += operation;
}

function calculate() {
  try {
    let expression = result.value;
    let answer = eval(expression);
    result.value = answer;
  } catch (error) {
    result.value = "Error";
  }
}

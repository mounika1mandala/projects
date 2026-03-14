const display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expr = display.value;

  try {
    // Replace user-friendly syntax with valid JavaScript
    expr = expr
      .replace(/sin\(/g, 'Math.sin(toRadians(')
      .replace(/cos\(/g, 'Math.cos(toRadians(')
      .replace(/tan\(/g, 'Math.tan(toRadians(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/√/g, 'Math.sqrt(')
      .replace(/π/g, 'Math.PI')
      .replace(/e\^/g, 'Math.exp(')  // e^x → Math.exp(x)
      .replace(/\^/g, '**');         // x^y → x**y

    const result = eval(expr);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

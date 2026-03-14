const display = document.getElementById('display');

function append(val) {
  if (display.innerText === '0' || display.innerText === 'Error') {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function allClear() {
  display.innerText = '0';
}

function clearEntry() {
  const text = display.innerText;
  const parts = text.match(/[\\d.]+|[-+*/]/g);
  if (parts && parts.length > 1) {
    parts.pop();
    display.innerText = parts.join('');
  } else {
    display.innerText = '0';
  }
}

function deleteLast() {
  let text = display.innerText;
  if (text.length === 1 || text === 'Error') {
    display.innerText = '0';
  } else {
    display.innerText = text.slice(0, -1);
  }
}

function calculate() {
  try {
    const sanitized = display.innerText.replace(/÷/g, '/').replace(/×/g, '*');
    display.innerText = eval(sanitized);
  } catch {
    display.innerText = 'Error';
  }
}

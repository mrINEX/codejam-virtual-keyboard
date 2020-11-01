const {
  first, second, third, fourth, fifth,
  ru1, en1,
  row1, row2, row3, row4, row5,
} = require('./js/data');

const { create, runRow } = require('./js/module');

const wr = document.body.appendChild(create('div', 'wrapper'));
wr.append(create('span', 'visible'));
wr.append(create('textarea', 'input'));
const main = create('main', 'keyboard');
wr.append(main);

runRow(row1, first, main);
runRow(row2, second, main);
runRow(row3, third, main);
runRow(row4, fourth, main);
runRow(row5, fifth, main);

const upperCharts = document.querySelectorAll('.up');
const downCharts = document.querySelectorAll('.down');
const textarea = document.querySelector('textarea');
const lang = localStorage.getItem('lang');

// localstorage ------------------------------------------
if (lang === 'ru') {
  for (let i = 0; i < upperCharts.length; i += 1) {
    upperCharts[i].innerHTML = `${ru1[i][1]}`;
    downCharts[i].innerHTML = `${ru1[i][0]}`;
  }
} else {
  for (let i = 0; i < upperCharts.length; i += 1) {
    upperCharts[i].innerHTML = `${en1[i][0]}`;
    downCharts[i].innerHTML = `${en1[i][1]}`;
  }
}

document.addEventListener('keydown', (event) => {
  textarea.focus();
  if (event.key === 'Tab') {
    event.preventDefault();
    textarea.setRangeText('  ', [textarea.selectionStart], [textarea.selectionEnd], ['end']);
  }
  const code = document.querySelector(`.${event.code}`);
  if (code) {
    code.classList.add('keyboard-code-active');
  }
  if (event.altKey && event.shiftKey) {
    if (upperCharts[0].innerHTML === 'Ё') {
      for (let i = 0; i < upperCharts.length; i += 1) {
        upperCharts[i].innerHTML = `${en1[i][0]}`;
        downCharts[i].innerHTML = `${en1[i][1]}`;
      }
      localStorage.setItem('lang', 'en');
    } else {
      for (let i = 0; i < upperCharts.length; i += 1) {
        upperCharts[i].innerHTML = `${ru1[i][1]}`;
        downCharts[i].innerHTML = `${ru1[i][0]}`;
      }
      localStorage.setItem('lang', 'ru');
    }
  }
});

document.addEventListener('keyup', (event) => {
  const code = document.querySelector(`.${event.code}`);
  if (code) {
    code.classList.remove('keyboard-code-active');
  }
});

let currentButton;
document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
  event.preventDefault();
  const { target } = event;
  if (target.parentNode.classList.contains('button')) {
    currentButton = document.querySelector(`.${target.parentNode.classList[1]}`);
    currentButton.classList.add('keyboard-code-active');
    textarea.focus();

    switch (target.innerHTML) {
      case 'Backspace':
        if (textarea.selectionStart !== textarea.selectionEnd) {
          textarea.setRangeText('', [textarea.selectionStart], [textarea.selectionEnd], ['end']);
        } else {
          textarea.setRangeText('', [textarea.selectionStart - 1], [textarea.selectionEnd], ['end']);
        }
        break;
      case ' ':
      case 'Tab':
        textarea.setRangeText(' ', [textarea.selectionStart], [textarea.selectionEnd], ['end']);
        break;
      case 'CapsLock':
        if (target.classList.contains('active-capslock')) {
          target.classList.remove('active-capslock');
          upperCharts.forEach((node) => node.classList.add('hidden'));
          downCharts.forEach((node) => node.classList.remove('hidden'));
        } else {
          upperCharts.forEach((node) => node.classList.remove('hidden'));
          downCharts.forEach((node) => node.classList.add('hidden'));
          target.classList.add('active-capslock');
        }
        break;
      case '↑':
        textarea.select();
        textarea.selectionEnd = textarea.selectionStart;
        break;
      case '↓':
        textarea.select();
        textarea.selectionStart = textarea.selectionEnd;
        break;
      case '←':
        if (textarea.selectionStart === textarea.selectionEnd && textarea.selectionStart > 0) {
          textarea.selectionStart -= 1;
          textarea.selectionEnd -= 1;
        } else {
          textarea.selectionEnd = textarea.selectionStart;
        }
        break;
      case '→':
        if (textarea.selectionStart === textarea.selectionEnd) {
          textarea.selectionEnd += 1;
          textarea.selectionStart += 1;
        } else {
          textarea.selectionStart = textarea.selectionEnd;
        }
        break;
      case '': // switch language
        if (upperCharts[0].innerHTML === 'Ё') {
          for (let i = 0; i < upperCharts.length; i += 1) {
            upperCharts[i].innerHTML = `${en1[i][0]}`;
            downCharts[i].innerHTML = `${en1[i][1]}`;
          }
          localStorage.setItem('lang', 'en');
        } else {
          for (let i = 0; i < upperCharts.length; i += 1) {
            upperCharts[i].innerHTML = `${ru1[i][1]}`;
            downCharts[i].innerHTML = `${ru1[i][0]}`;
          }
          localStorage.setItem('lang', 'ru');
        }
        break;
      case 'Enter':
        textarea.setRangeText('\n', [textarea.selectionStart], [textarea.selectionEnd], ['end']);
        break;
      case 'Shift':
      case 'Ctrl':
      case 'Alt':
        break;
      default:
        textarea.setRangeText(target.textContent, [textarea.selectionStart], [textarea.selectionEnd], ['end']);
    }
  }
});

document.querySelector('.keyboard').addEventListener('mouseup', () => {
  currentButton.classList.remove('keyboard-code-active');
});

document.querySelector('.visible').addEventListener('click', () => {
  if (main.classList.contains('op')) {
    main.classList.remove('op');
  } else {
    main.classList.add('op');
  }
});

const {
  first, second, third, fourth, fifth,
  ru1, en1,
  row1, row2, row3, row4, row5,
} = require('./js/data');

const audioClickRu = new Audio('./src/audio/click-ru.mp3');
const audioClickEn = new Audio('./src/audio/click-en.mp3');
const audioShift = new Audio('./src/audio/shift.mp3');
const audioBackspace = new Audio('./src/audio/backspace.mp3');
const audioCapsLock = new Audio('./src/audio/capsLock.mp3');
const audioEnter = new Audio('./src/audio/enter.mp3');

const { create, runRow } = require('./js/module');
const speechInput = require('./js/SpeechRecognition');

const wr = document.body.appendChild(create('div', 'wrapper'));
wr.append(create('span', 'voice'));
wr.append(create('span', 'visible'));
wr.append(create('button', 'audioClick'));
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
const capsLock = document.querySelector('.CapsLock');
const win = document.querySelector('.Win');
const lang = localStorage.getItem('lang');
const voice = document.querySelector('.voice');
const audioSwitch = document.querySelector('.audioClick');
audioSwitch.classList.add('op01');

// localstorage ------------------------------------------
if (lang === 'ru') {
  win.textContent = 'ru';
  for (let i = 0; i < upperCharts.length; i += 1) {
    upperCharts[i].innerHTML = `${ru1[i][1]}`;
    downCharts[i].innerHTML = `${ru1[i][0]}`;
  }
} else {
  win.textContent = 'en';
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
  if (event.key === 'Alt' || event.key === 'Meta') {
    event.preventDefault();
  }

  if (event.key === 'Shift') {
    if (capsLock.classList.contains('active-capslock')) {
      upperCharts.forEach((node) => node.classList.add('hidden'));
      downCharts.forEach((node) => node.classList.remove('hidden'));
    } else {
      upperCharts.forEach((node) => node.classList.remove('hidden'));
      downCharts.forEach((node) => node.classList.add('hidden'));
    }
  }

  if (event.key === 'CapsLock') {
    if (!event.getModifierState('CapsLock')) { // event.getModifierState("CapsLock") | capsLock.classList.contains('active-capslock')
      capsLock.classList.remove('active-capslock');
      upperCharts.forEach((node) => node.classList.add('hidden'));
      downCharts.forEach((node) => node.classList.remove('hidden'));
    } else {
      upperCharts.forEach((node) => node.classList.remove('hidden'));
      downCharts.forEach((node) => node.classList.add('hidden'));
      capsLock.classList.add('active-capslock');
    }
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
      win.textContent = 'en';
      localStorage.setItem('lang', 'en');
    } else {
      for (let i = 0; i < upperCharts.length; i += 1) {
        upperCharts[i].innerHTML = `${ru1[i][1]}`;
        downCharts[i].innerHTML = `${ru1[i][0]}`;
      }
      win.textContent = 'ru';
      localStorage.setItem('lang', 'ru');
    }
  }
});

document.addEventListener('keyup', (event) => {
  const code = document.querySelector(`.${event.code}`);
  if (code) {
    code.classList.remove('keyboard-code-active');
  }

  if (event.key === 'Shift') {
    if (capsLock.classList.contains('active-capslock')) {
      upperCharts.forEach((node) => node.classList.remove('hidden'));
      downCharts.forEach((node) => node.classList.add('hidden'));
    } else {
      upperCharts.forEach((node) => node.classList.add('hidden'));
      downCharts.forEach((node) => node.classList.remove('hidden'));
    }
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
          const num = textarea.selectionStart - 1;
          textarea.setRangeText('', [textarea.selectionStart - 1 < 0 ? 0 : num], [textarea.selectionEnd], ['end']);
        }
        break;
      case ' ':
      case 'Tab':
        textarea.setRangeText(' ', [textarea.selectionStart], [textarea.selectionEnd], ['end']);
        break;
      case 'CapsLock':
        if (capsLock.classList.contains('active-capslock')) {
          capsLock.classList.remove('active-capslock');
          upperCharts.forEach((node) => node.classList.add('hidden'));
          downCharts.forEach((node) => node.classList.remove('hidden'));
        } else {
          upperCharts.forEach((node) => node.classList.remove('hidden'));
          downCharts.forEach((node) => node.classList.add('hidden'));
          capsLock.classList.add('active-capslock');
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
      case 'ru':
        for (let i = 0; i < upperCharts.length; i += 1) {
          upperCharts[i].innerHTML = `${en1[i][0]}`;
          downCharts[i].innerHTML = `${en1[i][1]}`;
        }
        win.textContent = 'en';
        localStorage.setItem('lang', 'en');
        break;
      case 'en':
        for (let i = 0; i < upperCharts.length; i += 1) {
          upperCharts[i].innerHTML = `${ru1[i][1]}`;
          downCharts[i].innerHTML = `${ru1[i][0]}`;
        }
        win.textContent = 'ru';
        localStorage.setItem('lang', 'ru');
        break;
      case 'Enter':
        textarea.setRangeText('\n', [textarea.selectionStart], [textarea.selectionEnd], ['end']);
        break;
      case 'Shift':
        if (capsLock.classList.contains('active-capslock')) {
          upperCharts.forEach((node) => node.classList.add('hidden'));
          downCharts.forEach((node) => node.classList.remove('hidden'));
        } else {
          upperCharts.forEach((node) => node.classList.remove('hidden'));
          downCharts.forEach((node) => node.classList.add('hidden'));
        }
        break;
      case 'Ctrl':
      case 'Alt':
      case 'Win':
        break;
      default:
        textarea.setRangeText(target.textContent, [textarea.selectionStart], [textarea.selectionEnd], ['end']);
    }
  }
});

document.querySelector('.keyboard').addEventListener('mouseup', (event) => {
  const { target } = event;

  switch (target.innerHTML) {
    case 'Shift':
      if (capsLock.classList.contains('active-capslock')) {
        upperCharts.forEach((node) => node.classList.remove('hidden'));
        downCharts.forEach((node) => node.classList.add('hidden'));
      } else {
        upperCharts.forEach((node) => node.classList.add('hidden'));
        downCharts.forEach((node) => node.classList.remove('hidden'));
      }
      break;
    default:
  }

  if (currentButton) currentButton.classList.remove('keyboard-code-active');
});

function handleAudioClick({ target }) {
  if (target.parentNode.classList.contains('button')) {
    switch (target.innerHTML) {
      case 'Backspace':
        audioBackspace.play();
        break;
      case 'CapsLock':
        audioCapsLock.play();
        break;
      case 'Enter':
        audioEnter.play();
        break;
      case 'Shift':
        audioShift.play();
        break;
      default:
        if (win.textContent === 'ru') {
          audioClickRu.play();
        }
        if (win.textContent === 'en') {
          audioClickEn.play();
        }
    }
  }
}

document.querySelector('.audioClick').addEventListener('click', () => {
  if (audioSwitch.classList.contains('op01')) {
    document.querySelector('.keyboard').addEventListener('click', handleAudioClick);
    audioSwitch.classList.remove('op01');
  } else {
    document.querySelector('.keyboard').removeEventListener('click', handleAudioClick);
    audioSwitch.classList.add('op01');
  }
});

document.querySelector('.visible').addEventListener('click', () => {
  if (main.classList.contains('op')) {
    main.classList.remove('hidden');
    setTimeout(() => {
      main.classList.remove('op');
    });
  } else {
    main.classList.add('op');
    setTimeout(() => {
      main.classList.add('hidden');
    }, 400);
  }
});

let recognition;
voice.addEventListener('click', ({ target }) => {
  if (target.classList.contains('wave')) {
    voice.classList.remove('wave');
    recognition.stop();
  } else {
    voice.classList.add('wave');
    recognition = speechInput();
    recognition.start();
    textarea.focus();
    recognition.onresult = (event) => {
      textarea.focus();
      const speechToText = event.results[event.results.length - 1][0].transcript;
      textarea.setRangeText(speechToText, [textarea.selectionStart], [textarea.selectionEnd], ['end']);
    };
  }
});

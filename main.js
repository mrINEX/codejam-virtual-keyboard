const first = [['~', '`'], ['!', '1'], ['@', '2'], ['#', '3'], ['$', '4'], ['%', '5'], ['^', '6'], ['&', '7'], ['*', '8'], ['(', '9'], [')', '0'], ['_', '-'], ['+', '='], 'Backspace'];
const second = [['Tab'], ['Q', 'q'], ['W', 'w'], ['E', 'e'], ['R', 'r'], ['T', 't'], ['Y', 'y'], ['U', 'u'], ['I', 'i'], ['O', 'o'], ['P', 'p'], ['{', '['], ['}', ']'], ['|', '\\\\']];
const third = [['CapsLock'], ['A', 'a'], ['S', 's'], ['D', 'd'], ['F', 'f'], ['G', 'g'], ['H', 'h'], ['J', 'j'], ['K', 'k'], ['L', 'l'], [':', ';'], ['"', "'"], ['Enter']];
const fourth = [['Shift'], ['Z', 'z'], ['X', 'x'], ['C', 'c'], ['V', 'v'], ['B', 'b'], ['N', 'n'], ['M', 'm'], ['<', ','], ['>', '.'], ['?', '/'], ['uar'], ['Shift']];
const fifth = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'lar', 'dar', 'rar', 'Ctrl'];

const ru1 = [['ё', 'Ё'], ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['й', 'Й'], ['ц', 'Ц'], ['у', 'У'], ['к', 'К'], ['е', 'Е'], ['н', 'Н'], ['г', 'Г'], ['ш', 'Ш'], ['щ', 'Щ'], ['з', 'З'], ['х', 'Х'], ['ъ', 'Ъ'], ['\\', '/'], ['ф', 'Ф'], ['ы', 'Ы'], ['в', 'В'], ['а', 'А'], ['п', 'П'], ['р', 'Р'], ['о', 'О'], ['л', 'Л'], ['д', 'Д'], ['ж', 'Ж'], ['э', 'Э'], ['я', 'Я'], ['ч', 'Ч'], ['с', 'С'], ['м', 'М'], ['и', 'И'], ['т', 'Т'], ['ь', 'Ь'], ['б', 'Б'], ['ю', 'Ю'], ['.', ',']];
const en1 = [['~', '`'], ['!', '1'], ['@', '2'], ['#', '3'], ['$', '4'], ['%', '5'], ['^', '6'], ['&', '7'], ['*', '8'], ['(', '9'], [')', '0'], ['_', '-'], ['+', '='], ['Q', 'q'], ['W', 'w'], ['E', 'e'], ['R', 'r'], ['T', 't'], ['Y', 'y'], ['U', 'u'], ['I', 'i'], ['O', 'o'], ['P', 'p'], ['{', '['], ['}', ']'], ['|', '\\'], ['A', 'a'], ['S', 's'], ['D', 'd'], ['F', 'f'], ['G', 'g'], ['H', 'h'], ['J', 'j'], ['K', 'k'], ['L', 'l'], [':', ';'], ['"', "'"], ['Z', 'z'], ['X', 'x'], ['C', 'c'], ['V', 'v'], ['B', 'b'], ['N', 'n'], ['M', 'm'], ['<', ','], ['>', '.'], ['?', '/']];

const row1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const row2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];
const row3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const row4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const row5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

function create(elem, clname) {
  const n = document.createElement(elem);
  n.classList.add(clname);
  return n;
}
const wr = document.body.appendChild(create('div', 'wrapper'));
wr.append(create('textarea', 'input'));
const main = create('main', 'keyboard');
wr.append(main);
// draw 1r
const divrowfirst = create('div', 'row');
main.append(divrowfirst);
drawbutt(row1, first, divrowfirst);
// draw 2r
const divrowsecond = create('div', 'row');
main.append(divrowsecond);
drawbutt(row2, second, divrowsecond);
// draw 3r
const divrowthird = create('div', 'row');
main.append(divrowthird);
drawbutt(row3, third, divrowthird);
// draw 4r
const divrowfourth = create('div', 'row');
main.append(divrowfourth);
drawbutt(row4, fourth, divrowfourth);
// draw 5r
const divrowfifth = create('div', 'row');
main.append(divrowfifth);
drawbutt(row5, fifth, divrowfifth);

function drawbutt(row, position, attach) {
  for (let i = 0; i < position.length; i + 1) {
    const dbutt = create('div', 'button');
    dbutt.classList.add(`${row[i]}`);
    attach.append(dbutt);
    if (row[i] === 'Backspace' || row[i] === 'Tab' || row[i] === 'CapsLock' || row[i] === 'Enter' || row[i] === 'ShiftLeft' || row[i] === 'ShiftRight' || row[i] === 'ArrowUp' || row[i] === 'ControlLeft' || row[i] === 'MetaLeft' || row[i] === 'AltLeft' || row[i] === 'Space' || row[i] === 'AltRight' || row[i] === 'ArrowLeft' || row[i] === 'ArrowDown' || row[i] === 'ArrowRight' || row[i] === 'ControlRight') {
      const span = create('span', 'word');
      if (position[i] === ' ') {
        span.classList.add('\\');
      } else {
        span.classList.add(`${position[i]}`);
      }
      span.innerHTML = position[i];
      dbutt.append(span);
    } else {
      for (let j = 0; j < position[i].length; j + 1) {
        const span = create('span', `${position[i][j]}`);
        if (j === 0) {
          span.classList.add('up');
        } else {
          span.classList.add('down');
        }
        span.innerHTML = position[i][j];
        dbutt.append(span);
      }
    }
  }
}

//  localstorage ------------------------------------------
const u = this.document.getElementsByClassName('up');
const d = this.document.getElementsByClassName('down');
if (localStorage.getItem('leng') === 'ru') {
  for (let i = 0; i < u.length; i + 1) {
    u[i].innerHTML = `${ru1[i][1]}`;
    d[i].innerHTML = `${ru1[i][0]}`;
  }
} else {
  for (let i = 0; i < u.length; i + 1) {
    u[i].innerHTML = `${en1[i][0]}`;
    d[i].innerHTML = `${en1[i][1]}`;
  }
}

// lighting key in keyboard
const eu = document.getElementsByClassName('up');

window.addEventListener('keydown', (event) => {
  const button = this.document.getElementsByClassName(`${event.code}`);
  button[0].style.background = 'grey';
  button[0].style.borderRadius = '12px';

  const cl = document.getElementsByClassName('CapsLock');
  if (event.getModifierState('CapsLock')) {
    for (let i = 0; i < eu.length; i + 1) {
      eu[i].style.display = 'block';
    }
      cl[0].style.color = 'blue';
    } else {
      cl[0].style.color = null;
    }
    if (event.shiftKey === true) {
      for (let i = 0; i < eu.length; i + 1){
        eu[i].style.display = 'block';
      }
    }
});
window.addEventListener('keyup', (event) => {
  const button = this.document.getElementsByClassName(`${event.code}`);
  button[0].style.background = null;
  button[0].style.borderRadius = null;
  if (event.shiftKey === false && !event.getModifierState('CapsLock')) {
    for (let i = 0; i < eu.length; i + 1) {
      eu[i].style.display = 'none';
    }
  }
});

//click case
window.addEventListener('click', (event) => {
    let textarea = this.document.getElementsByClassName('input');
    let cl = document.getElementsByClassName('CapsLock');
    try{
      if (event.target.parentNode.classList[0] === 'button') {
        event.target.parentNode.style.background = 'grey';
        event.target.parentNode.style.borderRadius = '12px';
        this.setTimeout(() => {
            event.target.parentNode.style.background = null;
            event.target.parentNode.style.borderRadius = null;
        }, 200);
        if (event.target.innerHTML === 'Backspace') {
            textarea[0].value = textarea[0].value.replace(/.$|\n$/, '');
        } 
        else if (event.target.parentNode.classList[1] === 'Space') {
            textarea[0].value += " ";
        }
        else if (event.target.innerHTML === 'Enter') {
            textarea[0].value += "\n";
        }
        else if (event.target.innerHTML === 'Tab'){
            textarea[0].value += "  ";
        }
        else if (event.target.innerHTML === 'CapsLock') {
            if(event.target.parentNode.style.color !== 'blue') {
                for(let i = 0; i < eu.length; i + 1){
                    eu[i].style.display = 'block';
                }
                event.target.parentNode.style.color = 'blue';
            } else {
                for (let i = 0; i < eu.length; i++) {
                    eu[i].style.display = null;
                }
                event.target.parentNode.style.color = null;
            }
        }
        else if (event.target.innerHTML === "Shift" && cl[0].style.color !== "blue") {
            for (let i = 0; i < eu.length; i++) {
                eu[i].style.display = "block";
            }
            this.setTimeout(() => {
                for(let i = 0; i < eu.length; i++){
                    eu[i].style.display = 'none';
                }
            }, 100);
        }
        else {
            if (event.target.classList[0] !== 'word') {
                textarea[0].value += event.target.innerHTML;
            }
        }
      }
    } catch (err){ 
        const mess = err;
    }
});

//  ru case en case --------------------------------------------------------
const upe = this.document.getElementsByClassName('up');
const downe = this.document.getElementsByClassName('down');

//  shift + alt
window.addEventListener( 'keydown', ( event ) => {
    if (event.repeat && event.shiftKey) {
        window.addEventListener( 'keydown', ( event ) => {
            if (event.shiftKey && event.altKey && upe[0].innerHTML === "Ё" && localStorage.getItem('leng') === 'ru') {
                for (let i = 0; i < upe.length; i++) {
                    upe[i].innerHTML = `${en1[i][0]}`;
                    downe[i].innerHTML = `${en1[i][1]}`;
                }
            }
            if (event.shiftKey && event.altKey && upe[0].innerHTML === "~" && localStorage.getItem('leng') === "en") {
                for (let i = 0; i < upe.length; i++) {
                    upe[i].innerHTML = `${ru1[i][1]}`;
                    downe[i].innerHTML = `${ru1[i][0]}`;
                }
            }

        });
    }
});

//  alt + shift 
window.addEventListener( 'keydown', ( event ) => {
    if (event.repeat && event.altKey) {
        window.addEventListener( 'keydown', ( event ) => {
            if (event.shiftKey && event.altKey && upe[0].innerHTML === 'Ё' && localStorage.getItem('leng') === 'ru') {
                for (let i = 0; i < upe.length; i++) {
                    upe[i].innerHTML = `${en1[i][0]}`;
                    downe[i].innerHTML = `${en1[i][1]}`;
                }
            }
            if (event.shiftKey && event.altKey && upe[0].innerHTML === '~' && localStorage.getItem('leng') === 'en') {
                for (let i = 0; i < upe.length; i++) {
                    upe[i].innerHTML = `${ru1[i][1]}`;
                    downe[i].innerHTML = `${ru1[i][0]}`;
                }
            }

        });
    }
});
//localstorage------------------------------------------------
window.addEventListener('keyup', (event) => { 
  if (event.key === 'Alt' || event.key === 'Shift') {
    const upe = this.document.getElementsByClassName('up');
    if (upe[0].innerHTML === '~') {
      localStorage.setItem('leng', 'en');
    }
    if (upe[0].innerHTML === 'Ё') {
      localStorage.setItem('leng', 'ru');
    }
  }
});

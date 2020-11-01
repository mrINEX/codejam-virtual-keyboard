function create(elem, clname) {
  const n = document.createElement(elem);
  n.classList.add(clname);
  return n;
}

function drawRow(row, position, attach) {
  for (let i = 0; i < position.length; i += 1) {
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
      if (row[i] === 'MetaLeft') {
        span.textContent = '';
        span.style.backgroundImage = 'url("./src/img/lang.png")';
        span.style.backgroundSize = '24px';
        span.style.backgroundPosition = 'center';
        span.style.backgroundRepeat = 'no-repeat';
        span.style.fontSize = '12px';
        span.style.textShadow = 'white 0.1vw 0.1vw 1px, white -0.1vw -0.1vw 1px, white 0.1vw -0.1vw 1px, white -0.1vw 0.1vw 1px';
      }
      dbutt.append(span);
    } else {
      for (let j = 0; j < position[i].length; j += 1) {
        const span = create('span', `${position[i][j]}`);
        if (j === 0) {
          span.classList.add('up');
          span.classList.add('hidden');
        } else {
          span.classList.add('down');
        }
        span.innerHTML = position[i][j];
        dbutt.append(span);
      }
    }
  }
}

function runRow(row, num, main) {
  const div = create('div', 'row');
  main.append(div);
  drawRow(row, num, div);
}

module.exports = {
  drawRow,
  create,
  runRow,
};

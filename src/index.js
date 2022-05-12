// Import styles
import './styles/styles.css';

// Create container
const container = document.createElement('div');
container.className = 'container';
container.innerHTML =
  '<h2>RSS Virtual keyboard</h2>' +
  '<textarea class="textarea" id="textarea" placeholder="Remember, be nice!" rows="5" cols="50"></textarea>' +
  '<div class="keyboard-box"></div>' +
  '<p class="language">Toggle language: left Alt + Shift. For Windows.</p>';
document.body.append(container);

// Create keyboard
const keyboard = [
  96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97,
  115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32,
];
const addClassKeyboardKey = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'Space',
];
function drawKeyboard() {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    if (i === 13) {
      out += '<div class="keyboard-key Backspace"><span>⌫ Backspace</span></div>';
      out += '<div class="keyboard-key Tab"><span>⭾ Tab</span></div>';
    }
    if (i === 26) {
      out += '<div class="keyboard-key Delete"><span>Del</span></div>';
      out += '<div class="keyboard-key CapsLock"><span>CapsLk</span></div>';
    }
    if (i === 37) {
      out += '<div class="keyboard-key Enter"><span>↵ Enter</span></div>';
      out += '<div class="keyboard-key off ShiftLeft"><span>⇧ Shift</span></div>';
    }
    if (i === 47) {
      out += '<div class="keyboard-key ArrowUp"><span>🡱</span></div>';
      out += '<div class="keyboard-key ShiftRight"><span>⇧ Shift</span></div>';
      out += '<div class="keyboard-key ControlLeft"><span>Ctrl</span></div>';
      out += '<div class="keyboard-key MetaLeft"><span>Win</span></div>';
      out += '<div class="keyboard-key AltLeft"><span>Alt</span></div>';
    }
    out +=
      '<div class="keyboard-key key ' +
      addClassKeyboardKey[i] +
      '" "  data="' +
      keyboard[i] +
      '" >' +
      String.fromCharCode(keyboard[i]) +
      '</div>';
  }
  out += '<div class="keyboard-key AltRight"><span>Alt</span></div>';
  out += '<div class="keyboard-key ArrowLeft"><span>🡰</span></div>';
  out += '<div class="keyboard-key ArrowDown"><span>🡳</span></div>';
  out += '<div class="keyboard-key ArrowRight"><span>🡲</span></div>';
  out += '<div class="keyboard-key ControlRight"><span>Ctrl</span></div>';
  document.querySelector('.keyboard-box').innerHTML = out;
}
drawKeyboard();

const textarea = document.querySelector('.textarea');
const body = document.querySelector('body');
const key = document.querySelectorAll('.key');
const keyboardKey = document.querySelectorAll('.keyboard-key');
const keyCapsLock = document.querySelector('.CapsLock');
const keyShiftLeft = document.querySelector('.ShiftLeft');

const ruKeyboard = [
  1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079,
  1093, 1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090,
  1100, 1073, 1102, 46, 47, 32,
];
const enSymbol = [
  126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 123, 125, 124,
  97, 115, 100, 102, 103, 104, 106, 107, 108, 58, 34, 122, 120, 99, 118, 98, 110, 109, 60, 62, 63, 32,
];
const ruSymbol = [
  1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079,
  1093, 1098, 47, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090,
  1100, 1073, 1102, 44, 47, 32,
];
// Animation key keyboard
document.addEventListener('keydown', function (event) {
  let eventCode = event.code;
  if (eventCode === 'CapsLock') {
    onCaps();
  }
  if (eventCode !== 'CapsLock') {
    let keyClass = document.querySelector(`.${eventCode}`).classList;
    if (keyClass.contains('keyboard-key')) {
      keyClass.add('active');
    }

    document.addEventListener('keyup', function () {
      if (keyClass.contains('keyboard-key')) {
        keyClass.remove('active');
      }
    });
  }
});

// Animation key CapsLock
function onCaps() {
  if (document.querySelector('.CapsLock').classList.contains('active')) {
    document.querySelector('.CapsLock').classList.remove('active');
    capsLock();
  } else {
    document.querySelector('.CapsLock').classList.add('active');
    capsLock();
  }
}

// Function key CapsLock
function capsLock() {
  for (let i = 0; i < 1; i++) {
    if (keyCapsLock.classList.contains('active')) {
      keyboardKey[i].innerHTML = keyboardKey[i].innerHTML.toUpperCase();
    } else {
      keyboardKey[i].innerHTML = keyboardKey[i].innerHTML.toLowerCase();
    }
  }
  for (let i = 15; i < 52; i++) {
    if (i === 28 || i === 29 || i === 41 || i === 42) {
    } else {
      if (keyCapsLock.classList.contains('active')) {
        keyboardKey[i].innerHTML = keyboardKey[i].innerHTML.toUpperCase();
      } else {
        keyboardKey[i].innerHTML = keyboardKey[i].innerHTML.toLowerCase();
      }
    }
  }
}

document.querySelector('.CapsLock').addEventListener('click', onCaps);

// Language replacement
window.addEventListener('keydown', (e) => {
  if (e.code === 'ShiftLeft' && e.altKey) {
    replacementLanguage();
  }
});

function replacementLanguage() {
  if (body.classList.contains('en')) {
    for (let i = 0; i <= 46; i++) {
      if (keyCapsLock.classList.contains('active')) {
        key[i].innerHTML = String.fromCharCode(ruKeyboard[i]).toUpperCase();
        body.classList.add('ru');
        body.classList.remove('en');
      } else {
        key[i].innerHTML = String.fromCharCode(ruKeyboard[i]);
        body.classList.add('ru');
        body.classList.remove('en');
      }
    }
  } else {
    for (let i = 0; i <= 46; i++) {
      if (keyCapsLock.classList.contains('active')) {
        key[i].innerHTML = String.fromCharCode(keyboard[i]).toUpperCase();
        body.classList.add('en');
        body.classList.remove('ru');
      } else {
        key[i].innerHTML = String.fromCharCode(keyboard[i]);
        body.classList.add('en');
        body.classList.remove('ru');
      }
    }
  }
}

// Function key Shift
window.addEventListener('keydown', (e) => {
  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !e.altKey) {
    onShift();
  }
});

window.addEventListener('keyup', (e) => {
  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !e.altKey) {
    offShift();
  }
});

function onShift() {
  for (let i = 0; i <= 46; i++) {
    if (body.classList.contains('en')) {
      if (keyCapsLock.classList.contains('active')) {
        key[i].innerHTML = String.fromCharCode(enSymbol[i]).toLowerCase();
      } else {
        key[i].innerHTML = String.fromCharCode(enSymbol[i]).toUpperCase();
      }
    } else {
      if (keyCapsLock.classList.contains('active')) {
        key[i].innerHTML = String.fromCharCode(ruSymbol[i]).toLowerCase();
      } else {
        key[i].innerHTML = String.fromCharCode(ruSymbol[i]).toUpperCase();
      }
    }
  }
}

function offShift() {
  for (let i = 0; i <= 46; i++) {
    if (body.classList.contains('en')) {
      if (keyCapsLock.classList.contains('active')) {
        key[i].innerHTML = String.fromCharCode(keyboard[i]).toUpperCase();
      } else {
        key[i].innerHTML = String.fromCharCode(keyboard[i]);
      }
    } else {
      if (keyCapsLock.classList.contains('active')) {
        key[i].innerHTML = String.fromCharCode(ruKeyboard[i]).toUpperCase();
      } else {
        key[i].innerHTML = String.fromCharCode(ruKeyboard[i]);
      }
    }
  }
}

document.querySelector('.ShiftLeft').addEventListener('mousedown', onShift);
document.querySelector('.ShiftRight').addEventListener('mousedown', onShift);
document.querySelector('.ShiftLeft').addEventListener('mouseup', offShift);
document.querySelector('.ShiftRight').addEventListener('mouseup', offShift);

// Touch symbol press
textarea.addEventListener('blur', () => textarea.focus());
let text = [];
function pressSymbol(e) {
  for (let i = 0; i < 48; i++) {
    if (e.code == addClassKeyboardKey[i]) {
      text.push(key[i].innerHTML);
    }
  }
  textarea.textContent = text.join('');
  if (e.code == 'Tab') {
    text.push('   ');
  }
  if (e.code == 'Backspace') {
    text.pop();
  }
  if (e.code == 'Space') {
    text.push(' ');
  }
}

window.addEventListener('keydown', function (e) {
  pressSymbol(e);
});

key.forEach((e, n) => {
  e.addEventListener('mousedown', (event) => {
    if (n >= 0) {
      text.push(key[n].innerHTML);
    }
    textarea.textContent = text.join('');
  });
});

keyboardKey.forEach((e, n) => {
  e.addEventListener('mousedown', (event) => {
    if (n == 13) {
      text.pop();
    }
    if (n == 14) {
      text.push('   ');
    }
    textarea.textContent = text.join('');
  });
});

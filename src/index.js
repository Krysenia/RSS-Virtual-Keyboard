// Import styles
import './styles/styles.css';

// const keyboard = [];
// document.onkeypress = function eventKey(event) {
//   //   console.log(event);
//   keyboard.push(event.charCode);
//   console.log(keyboard);
// };

// Create container
const container = document.createElement('div');
container.className = 'container';
container.innerHTML =
  '<h2>RSS Virtual keyboard</h2>' +
  '<textarea class="textarea" id="textarea" placeholder="Remember, be nice!" rows="5" cols="50"></textarea>' +
  '<div class="keyboard-box"></div>' +
  '<p class="language">Toggle language: left Shift + Alt. For Windows.</p>' +
  '<p class="language">Привет. Из-за частых коммандировок по работе, не успеваю в срок закочинть работу, и нет мне за это прощения. Если есть возможнсть и желание, а также звезды и космосила благославляют - прошу, проверьте мою работу позже, пожалуйста. Связь со мной Discord: Krysenia#7335, TG: @Krysenia</p>';

document.body.append(container);

// Create keyboard
function drawKeyboard() {
  const keyboard = [
    96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,
    97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32,
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
    'Unknown',
    'Space',
  ];

  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    if (i === 13) {
      out += '<div class="keyboard-key Backspace"><span>Backspace</span></div>';
      out += '<div class="keyboard-key Tab"><span>⭾ Tab</span></div>';
    }
    if (i === 26) {
      out += '<div class="keyboard-key Del"><span>Del</span></div>';
      out += '<div class="keyboard-key CapsLk"><span>CapsLk</span></div>';
    }
    if (i === 37) {
      out += '<div class="keyboard-key Enter"><span>↵ Enter</span></div>';
      out += '<div class="keyboard-key Shift"><span>Shift</span></div>';
    }
    if (i === 47) {
      out += '<div class="keyboard-key PgUp"><span>🡱</span></div>';
      out += '<div class="keyboard-key Shift"><span>Shift</span></div>';
      out += '<div class="keyboard-key Ctrl"><span>Ctrl</span></div>';
      out += '<div class="keyboard-key Win"><span>Win</span></div>';
      out += '<div class="keyboard-key Alt"><span>Alt</span></div>';
    }
    out +=
      '<div class="keyboard-key ' +
      addClassKeyboardKey[i] +
      '" "  data="' +
      keyboard[i] +
      '" >' +
      String.fromCharCode(keyboard[i]) +
      '</div>';
  }
  out += '<div class="keyboard-key Alt"><span>Alt</span></div>';
  out += '<div class="keyboard-key PgLeft"><span>🡰</span></div>';
  out += '<div class="keyboard-key PgDn"><span>🡳</span></div>';
  out += '<div class="keyboard-key PgRight"><span>🡲</span></div>';
  out += '<div class="keyboard-key Ctrl "><span>Ctrl</span></div>';
  document.querySelector('.keyboard-box').innerHTML = out;
}

drawKeyboard();
